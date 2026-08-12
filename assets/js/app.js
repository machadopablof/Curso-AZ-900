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
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");

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
    var target = document.getElementById(id);
    if (!target || !target.classList.contains("lesson")) {
      showHome();
      return;
    }

    homeView.classList.remove("active");
    lessons.forEach(function (l) {
      l.classList.toggle("active", l.id === id);
    });

    allLessonLinks.forEach(function (link) {
      link.classList.toggle("active", link.dataset.target === id);
    });
    homeLink.classList.remove("active");
    openModuleContaining(id);

    renderLessonFooter(id);

    if (!opts.skipScroll) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
    closeSidebarMobile();
  }

  function showHome() {
    lessons.forEach(function (l) {
      l.classList.remove("active");
    });
    homeView.classList.add("active");
    allLessonLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    homeLink.classList.add("active");
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
