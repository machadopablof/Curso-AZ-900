(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "az900:theme";
  var PROGRESS_KEY = "az900:progress";
  var CHECKLIST_KEY = "az900:checklist";

  /* ------------------------------------------------------------ */
  /* Theme                                                         */
  /* ------------------------------------------------------------ */

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function effectiveTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  applyTheme(localStorage.getItem(THEME_KEY));

  var themeToggle = document.getElementById("theme-toggle");

  function refreshThemeIcon() {
    var eff = effectiveTheme();
    themeToggle.textContent = eff === "dark" ? "☀️" : "\u{1F319}";
    themeToggle.setAttribute(
      "aria-label",
      eff === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
    );
  }

  themeToggle.addEventListener("click", function () {
    var next = effectiveTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    refreshThemeIcon();
  });

  refreshThemeIcon();

  /* ------------------------------------------------------------ */
  /* Storage helpers                                                */
  /* ------------------------------------------------------------ */

  function readJSON(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch (e) {
      return {};
    }
  }

  function writeJSON(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  /* ------------------------------------------------------------ */
  /* Build sidebar from lesson articles                            */
  /* ------------------------------------------------------------ */

  var lessons = Array.prototype.slice.call(document.querySelectorAll(".lesson"));
  var navList = document.getElementById("nav-list");
  var progress = readJSON(PROGRESS_KEY);

  var modules = []; // { id, title, lessons: [{id, title}] }
  lessons.forEach(function (article) {
    var modTitle = article.getAttribute("data-module");
    var mod = modules[modules.length - 1];
    if (!mod || mod.title !== modTitle) {
      mod = { title: modTitle, id: "mod-" + modules.length, lessons: [] };
      modules.push(mod);
    }
    mod.lessons.push({ id: article.id, title: article.getAttribute("data-title") });
  });

  modules.forEach(function (mod, idx) {
    var details = document.createElement("details");
    details.className = "module-group";
    details.open = idx === 0;
    details.dataset.modId = mod.id;

    var summary = document.createElement("summary");
    summary.innerHTML =
      '<span>' + mod.title + '</span><span class="module-count">' + mod.lessons.length + "</span>";
    details.appendChild(summary);

    var ul = document.createElement("ul");
    ul.className = "module-lessons";

    mod.lessons.forEach(function (lesson) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + lesson.id;
      a.className = "lesson-link";
      a.dataset.target = lesson.id;
      a.innerHTML =
        '<span class="lesson-check"></span><span class="lesson-link-title">' +
        lesson.title +
        "</span>";
      li.appendChild(a);
      ul.appendChild(li);
    });

    details.appendChild(ul);
    navList.appendChild(details);
  });

  var allLessonLinks = Array.prototype.slice.call(document.querySelectorAll(".lesson-link"));
  var homeLink = document.getElementById("nav-home-link");

  function markDoneLinks() {
    allLessonLinks.forEach(function (link) {
      link.classList.toggle("done", !!progress[link.dataset.target]);
    });
    updateTopProgress();
  }

  function updateTopProgress() {
    var total = lessons.length;
    var done = lessons.filter(function (l) {
      return progress[l.id];
    }).length;
    var pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-label").textContent = done + "/" + total + " aulas (" + pct + "%)";
  }

  /* ------------------------------------------------------------ */
  /* View switching (home vs lesson)                                */
  /* ------------------------------------------------------------ */

  var homeView = document.getElementById("home-view");
  var simuladoView = document.getElementById("simulado-view");
  var simuladoLink = document.getElementById("nav-simulado-link");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");
  var currentLessonId = null;

  function closeSidebarMobile() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("show");
  }

  function openModuleContaining(lessonId) {
    var groups = document.querySelectorAll(".module-group");
    groups.forEach(function (g) {
      if (g.querySelector('[data-target="' + lessonId + '"]')) {
        g.open = true;
      }
    });
  }

  function showLesson(id, opts) {
    opts = opts || {};

    if (id === "simulado") {
      showSimulado();
      return;
    }

    var target = document.getElementById(id);
    if (!target || !target.classList.contains("lesson")) {
      showHome();
      return;
    }

    currentLessonId = id;
    homeView.classList.remove("active");
    simuladoView.classList.remove("active");
    lessons.forEach(function (l) {
      l.classList.toggle("active", l.id === id);
    });

    allLessonLinks.forEach(function (link) {
      link.classList.toggle("active", link.dataset.target === id);
    });
    homeLink.classList.remove("active");
    simuladoLink.classList.remove("active");
    openModuleContaining(id);

    renderLessonFooter(id);

    if (!opts.skipScroll) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
    closeSidebarMobile();
  }

  function showHome() {
    currentLessonId = null;
    lessons.forEach(function (l) {
      l.classList.remove("active");
    });
    simuladoView.classList.remove("active");
    homeView.classList.add("active");
    allLessonLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    simuladoLink.classList.remove("active");
    homeLink.classList.add("active");
    window.scrollTo({ top: 0 });
    closeSidebarMobile();
  }

  function showSimulado() {
    currentLessonId = null;
    lessons.forEach(function (l) {
      l.classList.remove("active");
    });
    homeView.classList.remove("active");
    simuladoView.classList.add("active");
    allLessonLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    homeLink.classList.remove("active");
    simuladoLink.classList.add("active");
    window.scrollTo({ top: 0 });
    closeSidebarMobile();
  }

  function navigateTo(id) {
    if (location.hash === "#" + id) {
      showLesson(id);
    } else {
      location.hash = id;
    }
  }

  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    location.hash = "";
    showHome();
  });

  navList.addEventListener("click", function (e) {
    var link = e.target.closest(".lesson-link");
    if (!link) return;
    e.preventDefault();
    navigateTo(link.dataset.target);
  });

  document.querySelectorAll("[data-goto]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      navigateTo(el.getAttribute("data-goto"));
    });
  });

  document.querySelectorAll(".module-card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      navigateTo(card.getAttribute("data-goto"));
    });
  });

  window.addEventListener("hashchange", function () {
    var id = location.hash.replace("#", "");
    if (id) showLesson(id);
    else showHome();
  });

  /* ------------------------------------------------------------ */
  /* Lesson footer: mark complete + prev/next pager                */
  /* ------------------------------------------------------------ */

  var flatIds = lessons.map(function (l) {
    return l.id;
  });

  function renderLessonFooter(id) {
    var article = document.getElementById(id);
    var footer = article.querySelector(".lesson-footer");
    if (!footer) return;

    var idx = flatIds.indexOf(id);
    var prevId = idx > 0 ? flatIds[idx - 1] : null;
    var nextId = idx < flatIds.length - 1 ? flatIds[idx + 1] : null;

    var isDone = !!progress[id];

    footer.innerHTML =
      '<label class="complete-toggle' +
      (isDone ? " checked" : "") +
      '"><input type="checkbox" class="complete-checkbox"' +
      (isDone ? " checked" : "") +
      "> <span>" +
      (isDone ? "Aula concluída" : "Marcar aula como concluída") +
      '</span></label>' +
      '<div class="lesson-pager">' +
      pagerButton("prev", prevId) +
      pagerButton("next", nextId) +
      "</div>";

    var checkbox = footer.querySelector(".complete-checkbox");
    checkbox.addEventListener("change", function () {
      progress[id] = checkbox.checked;
      writeJSON(PROGRESS_KEY, progress);
      markDoneLinks();
      renderLessonFooter(id);
      scheduleDriveSync();
    });

    var prevBtn = footer.querySelector('[data-nav="prev"]');
    var nextBtn = footer.querySelector('[data-nav="next"]');
    if (prevBtn && !prevBtn.disabled) {
      prevBtn.addEventListener("click", function () {
        navigateTo(prevId);
      });
    }
    if (nextBtn && !nextBtn.disabled) {
      nextBtn.addEventListener("click", function () {
        navigateTo(nextId);
      });
    }
  }

  function pagerButton(dir, id) {
    var disabled = !id;
    var title = disabled ? "" : document.getElementById(id).getAttribute("data-title");
    var label = dir === "prev" ? "← Anterior" : "Próxima →";
    var cls = "pager-btn" + (dir === "next" ? " next" : "");
    return (
      '<button type="button" class="' +
      cls +
      '" data-nav="' +
      dir +
      '"' +
      (disabled ? " disabled" : "") +
      '><span class="pager-label">' +
      label +
      "</span><span>" +
      (title || "—") +
      "</span></button>"
    );
  }

  /* ------------------------------------------------------------ */
  /* Checklist (interactive, persisted)                            */
  /* ------------------------------------------------------------ */

  var checklistState = readJSON(CHECKLIST_KEY);

  document.querySelectorAll(".checklist-item").forEach(function (item) {
    var key = item.dataset.key;
    var input = item.querySelector("input");
    if (checklistState[key]) {
      input.checked = true;
      item.classList.add("checked");
    }
    input.addEventListener("change", function () {
      checklistState[key] = input.checked;
      writeJSON(CHECKLIST_KEY, checklistState);
      item.classList.toggle("checked", input.checked);
      updateChecklistProgress(item.closest(".checklist-group"));
      scheduleDriveSync();
    });
  });

  function updateChecklistProgress(group) {
    if (!group) return;
    var items = group.querySelectorAll(".checklist-item input");
    var done = 0;
    items.forEach(function (i) {
      if (i.checked) done++;
    });
    var bar = group.querySelector(".checklist-progress-fill");
    var label = group.querySelector(".checklist-progress-label");
    var pct = items.length ? Math.round((done / items.length) * 100) : 0;
    if (bar) bar.style.width = pct + "%";
    if (label) label.textContent = done + "/" + items.length;
  }

  document.querySelectorAll(".checklist-group").forEach(updateChecklistProgress);

  /* ------------------------------------------------------------ */
  /* Mobile drawer                                                  */
  /* ------------------------------------------------------------ */

  document.getElementById("hamburger").addEventListener("click", function () {
    sidebar.classList.toggle("open");
    backdrop.classList.toggle("show");
  });
  backdrop.addEventListener("click", closeSidebarMobile);

  /* ------------------------------------------------------------ */
  /* Sidebar search                                                 */
  /* ------------------------------------------------------------ */

  document.getElementById("search").addEventListener("input", function (e) {
    var q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".module-group").forEach(function (group) {
      var anyVisible = false;
      group.querySelectorAll(".lesson-link").forEach(function (link) {
        var match = link.textContent.toLowerCase().indexOf(q) !== -1;
        link.parentElement.style.display = match ? "" : "none";
        if (match) anyVisible = true;
      });
      group.style.display = anyVisible || q === "" ? "" : "none";
      if (q !== "" && anyVisible) group.open = true;
    });
  });

  /* ------------------------------------------------------------ */
  /* Google Drive sync                                              */
  /* ------------------------------------------------------------ */

  var DRIVE_CLIENT_ID = "508326102435-jhg57poeevjgpk1o4t43aompkcudek45.apps.googleusercontent.com";
  var DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.file";
  var DRIVE_FILE_NAME = "az900-curso-progresso.json";
  var DRIVE_FOLDER_ID = "18AOEyezLAlls_plnFieREbYGXPEhiocA";
  var DRIVE_WAS_CONNECTED_KEY = "az900:drive-was-connected";
  var DRIVE_SESSION_KEY = "az900:drive-session";
  var DRIVE_TOKEN_SAFETY_MARGIN_MS = 60000; // treat token as expired 60s early

  function saveDriveSession() {
    if (!driveState.accessToken || !driveState.expiresAt) return;
    try {
      sessionStorage.setItem(
        DRIVE_SESSION_KEY,
        JSON.stringify({
          accessToken: driveState.accessToken,
          expiresAt: driveState.expiresAt,
          fileId: driveState.fileId
        })
      );
    } catch (e) {
      /* sessionStorage unavailable (private mode, quota) — silently skip */
    }
  }

  function loadDriveSession() {
    try {
      var raw = sessionStorage.getItem(DRIVE_SESSION_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || !data.accessToken || !data.expiresAt) return null;
      if (data.expiresAt - DRIVE_TOKEN_SAFETY_MARGIN_MS <= Date.now()) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function clearDriveSession() {
    try {
      sessionStorage.removeItem(DRIVE_SESSION_KEY);
    } catch (e) {}
  }

  var driveWidget = document.getElementById("drive-widget");
  var driveToggleBtn = document.getElementById("drive-toggle");
  var drivePanel = document.getElementById("drive-panel");
  var drivePanelStatus = document.getElementById("drive-panel-status");
  var driveConnectBtn = document.getElementById("drive-connect-btn");
  var driveSyncBtn = document.getElementById("drive-sync-btn");
  var driveDisconnectBtn = document.getElementById("drive-disconnect-btn");

  var driveTokenClient = null;
  var driveState = {
    accessToken: null,
    expiresAt: null,
    fileId: null,
    connected: false,
    syncing: false,
    lastSyncAt: null,
    lastError: null
  };

  function showToast(message) {
    var toast = document.getElementById("app-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "app-toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 3200);
  }

  function unionTrue(a, b) {
    var out = {};
    Object.keys(a || {}).forEach(function (k) {
      if (a[k]) out[k] = true;
    });
    Object.keys(b || {}).forEach(function (k) {
      if (b[k]) out[k] = true;
    });
    return out;
  }

  function reapplyProgressAndChecklistUI() {
    markDoneLinks();
    document.querySelectorAll(".checklist-item").forEach(function (item) {
      var key = item.dataset.key;
      var input = item.querySelector("input");
      var checked = !!checklistState[key];
      input.checked = checked;
      item.classList.toggle("checked", checked);
    });
    document.querySelectorAll(".checklist-group").forEach(updateChecklistProgress);
    if (currentLessonId) renderLessonFooter(currentLessonId);
  }

  function waitForGoogleIdentity(cb, attemptsLeft) {
    if (attemptsLeft === undefined) attemptsLeft = 25;
    if (window.google && window.google.accounts && window.google.accounts.oauth2) {
      cb();
    } else if (attemptsLeft > 0) {
      setTimeout(function () {
        waitForGoogleIdentity(cb, attemptsLeft - 1);
      }, 200);
    } else {
      drivePanelStatus.textContent = "Não foi possível carregar o Google. Verifique sua conexão e tente novamente.";
    }
  }

  function ensureTokenClient(cb) {
    waitForGoogleIdentity(function () {
      if (!driveTokenClient) {
        driveTokenClient = google.accounts.oauth2.initTokenClient({
          client_id: DRIVE_CLIENT_ID,
          scope: DRIVE_SCOPE,
          callback: function () {} // overridden per-call below
        });
      }
      cb();
    });
  }

  function updateDriveUI() {
    driveToggleBtn.classList.toggle("drive-connected", driveState.connected);
    driveToggleBtn.classList.toggle("drive-syncing", driveState.syncing);
    driveToggleBtn.textContent = driveState.connected ? "✅" : "☁️";

    driveConnectBtn.hidden = driveState.connected;
    driveSyncBtn.hidden = !driveState.connected;
    driveDisconnectBtn.hidden = !driveState.connected;
    driveSyncBtn.disabled = driveState.syncing;

    if (driveState.syncing) {
      drivePanelStatus.textContent = "Sincronizando...";
    } else if (driveState.lastError) {
      drivePanelStatus.textContent = "Erro ao sincronizar: " + driveState.lastError;
    } else if (driveState.connected) {
      drivePanelStatus.textContent = driveState.lastSyncAt
        ? "Conectado. Última sincronização às " +
          new Date(driveState.lastSyncAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) +
          "."
        : "Conectado ao Google Drive.";
    } else {
      drivePanelStatus.textContent = "Conecte para salvar seu progresso no Google Drive.";
    }
  }

  function openDrivePanel() {
    drivePanel.hidden = false;
  }
  function closeDrivePanel() {
    drivePanel.hidden = true;
  }

  driveToggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (drivePanel.hidden) openDrivePanel();
    else closeDrivePanel();
  });
  document.addEventListener("click", function (e) {
    if (!drivePanel.hidden && !driveWidget.contains(e.target)) closeDrivePanel();
  });

  function driveApiFetch(url, options) {
    options = options || {};
    options.headers = options.headers || {};
    options.headers["Authorization"] = "Bearer " + driveState.accessToken;
    return fetch(url, options).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (text) {
          throw new Error("HTTP " + res.status + " " + text.slice(0, 200));
        });
      }
      return res;
    });
  }

  function findRemoteFile() {
    var q = encodeURIComponent("name='" + DRIVE_FILE_NAME + "' and trashed=false");
    return driveApiFetch(
      "https://www.googleapis.com/drive/v3/files?q=" + q + "&spaces=drive&fields=files(id,name)&pageSize=1"
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        return data.files && data.files.length ? data.files[0].id : null;
      });
  }

  function createRemoteFile(content) {
    var boundary = "az900_boundary_" + Date.now();

    function doCreate(withParent) {
      var meta = withParent
        ? { name: DRIVE_FILE_NAME, mimeType: "application/json", parents: [DRIVE_FOLDER_ID] }
        : { name: DRIVE_FILE_NAME, mimeType: "application/json" };
      var b =
        "--" + boundary + "\r\n" +
        "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
        JSON.stringify(meta) + "\r\n" +
        "--" + boundary + "\r\n" +
        "Content-Type: application/json\r\n\r\n" +
        JSON.stringify(content) + "\r\n" +
        "--" + boundary + "--";
      return driveApiFetch(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
        { method: "POST", headers: { "Content-Type": "multipart/related; boundary=" + boundary }, body: b }
      );
    }

    return doCreate(true)
      .catch(function () {
        // Folder not accessible to this app yet (drive.file scope) — fall back to root.
        showToast("Não consegui salvar diretamente na pasta escolhida. Criei o arquivo no seu Drive — mova-o para a pasta desejada uma vez, se quiser.");
        return doCreate(false);
      })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        return data.id;
      });
  }

  function downloadRemoteContent(fileId) {
    return driveApiFetch("https://www.googleapis.com/drive/v3/files/" + fileId + "?alt=media")
      .then(function (res) {
        return res.text();
      })
      .then(function (text) {
        try {
          return JSON.parse(text) || {};
        } catch (e) {
          return {};
        }
      });
  }

  function uploadRemoteContent(fileId, content) {
    return driveApiFetch("https://www.googleapis.com/upload/drive/v3/files/" + fileId + "?uploadType=media", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content)
    });
  }

  function performSync(pullAndMerge) {
    if (!driveState.connected || driveState.syncing) return;
    driveState.syncing = true;
    driveState.lastError = null;
    updateDriveUI();

    var ensureFile = driveState.fileId
      ? Promise.resolve(driveState.fileId)
      : findRemoteFile().then(function (id) {
          if (id) return id;
          return createRemoteFile({ progress: progress, checklist: checklistState, updatedAt: Date.now() });
        });

    ensureFile
      .then(function (fileId) {
        driveState.fileId = fileId;
        saveDriveSession();
        if (!pullAndMerge) return null;
        return downloadRemoteContent(fileId);
      })
      .then(function (remote) {
        if (remote) {
          progress = unionTrue(progress, remote.progress || {});
          checklistState = unionTrue(checklistState, remote.checklist || {});
          writeJSON(PROGRESS_KEY, progress);
          writeJSON(CHECKLIST_KEY, checklistState);
          reapplyProgressAndChecklistUI();
        }
        return uploadRemoteContent(driveState.fileId, {
          progress: progress,
          checklist: checklistState,
          updatedAt: Date.now()
        });
      })
      .then(function () {
        driveState.syncing = false;
        driveState.lastSyncAt = Date.now();
        updateDriveUI();
      })
      .catch(function (err) {
        driveState.syncing = false;
        driveState.lastError = err && err.message ? err.message : "erro desconhecido";
        updateDriveUI();
      });
  }

  var driveSyncDebounce = null;
  function scheduleDriveSync() {
    if (!driveState.connected) return;
    clearTimeout(driveSyncDebounce);
    driveSyncDebounce = setTimeout(function () {
      performSync(false);
    }, 1500);
  }

  function onDriveTokenGranted(resp) {
    if (resp.error) {
      driveState.connected = false;
      driveState.lastError = resp.error;
      updateDriveUI();
      return;
    }
    driveState.accessToken = resp.access_token;
    driveState.expiresAt = Date.now() + (Number(resp.expires_in) || 3600) * 1000;
    driveState.connected = true;
    driveState.lastError = null;
    localStorage.setItem(DRIVE_WAS_CONNECTED_KEY, "1");
    saveDriveSession();
    updateDriveUI();
    showToast("Conectado ao Google Drive. Sincronizando...");
    performSync(true);
  }

  driveConnectBtn.addEventListener("click", function () {
    ensureTokenClient(function () {
      driveTokenClient.callback = onDriveTokenGranted;
      driveTokenClient.requestAccessToken({ prompt: "" });
    });
  });

  driveSyncBtn.addEventListener("click", function () {
    performSync(true);
    showToast("Sincronizando com o Google Drive...");
  });

  driveDisconnectBtn.addEventListener("click", function () {
    if (driveState.accessToken && window.google && window.google.accounts) {
      google.accounts.oauth2.revoke(driveState.accessToken, function () {});
    }
    driveState.accessToken = null;
    driveState.expiresAt = null;
    driveState.connected = false;
    driveState.fileId = null;
    localStorage.removeItem(DRIVE_WAS_CONNECTED_KEY);
    clearDriveSession();
    updateDriveUI();
    closeDrivePanel();
    showToast("Desconectado do Google Drive. Seu progresso continua salvo neste navegador.");
  });

  function attemptSilentReconnect() {
    if (localStorage.getItem(DRIVE_WAS_CONNECTED_KEY) !== "1") return;
    ensureTokenClient(function () {
      driveTokenClient.callback = function (resp) {
        if (!resp.error) onDriveTokenGranted(resp);
      };
      driveTokenClient.requestAccessToken({ prompt: "" });
    });
  }

  function restoreDriveSessionOrReconnect() {
    var session = loadDriveSession();
    if (session) {
      driveState.accessToken = session.accessToken;
      driveState.expiresAt = session.expiresAt;
      driveState.fileId = session.fileId || null;
      driveState.connected = true;
      updateDriveUI();
      performSync(true);
      return;
    }
    attemptSilentReconnect();
  }

  updateDriveUI();
  restoreDriveSessionOrReconnect();

  /* ------------------------------------------------------------ */
  /* Initial route                                                  */
  /* ------------------------------------------------------------ */

  markDoneLinks();
  var initialId = location.hash.replace("#", "");
  if (initialId) {
    showLesson(initialId, { skipScroll: true });
  } else {
    showHome();
  }
})();
