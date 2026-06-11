// -------------------------------------------------------------------------
// XYVRO STUDIO PANEL ROUTER
// DESCRIPTION: Operates premium corporate interface transitions.
// -------------------------------------------------------------------------
function switchStudioView(targetPanelId) {
    var corePanels = document.querySelectorAll('.apple-stage-panel');
    corePanels.forEach(function(panel) {
        panel.classList.remove('active');
    });

    var targetedNode = document.getElementById(targetPanelId);
    if (targetedNode) {
        targetedNode.classList.add('active');
    } else {
        console.error("[VIEW ROUTER FATAL] Invalid interface target map: ", targetPanelId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -------------------------------------------------------------------------
// COCKPIT SECONDARY SUB-TAB CONTROLLER
// DESCRIPTION: Controls inside view panels for the Ecosystem Showcase chassis.
// -------------------------------------------------------------------------
function switchDashboardTab(buttonElement, targetSubViewId) {
    var tabs = buttonElement.parentNode.querySelectorAll('.sidebar-nav-item');
    tabs.forEach(function(tab) { tab.classList.remove('active-sub'); });
    buttonElement.classList.add('active-sub');

    var views = document.querySelectorAll('.dashboard-subview');
    views.forEach(function(view) { view.classList.remove('active-subview'); });

    var targetView = document.getElementById(targetSubViewId);
    if (targetView) {
        targetView.classList.add('active-subview');
    }

    var headlineDisplay = document.getElementById('dashboard-tab-headline');
    if (targetSubViewId === 'showcase-featured') headlineDisplay.textContent = "Featured Projects";
    if (targetSubViewId === 'showcase-apps') headlineDisplay.textContent = "Web & Applications";
    if (targetSubViewId === 'showcase-games') headlineDisplay.textContent = "Interactive Media";
}

// -------------------------------------------------------------------------
// DYNAMIC AGE RUNTIME COMPILER FOR TEENS
// DESCRIPTION: Computes precise year differences for custom team specs.
// -------------------------------------------------------------------------
(function() {
    "use strict";
    
    // Encapsulated birth indices [Year, Month, Day]
    var aryanBirth = [2013, 4, 12];
    var malayBirth = [2013, 4, 12]; // Automatically tracks dynamic metrics at 13

    function processTemporalAge(epochArray) {
        var clockSource = new Date();
        var sysYear = clockSource.getFullYear();
        var sysMonth = clockSource.getMonth() + 1;
        var sysDay = clockSource.getDate();

        var computedAge = sysYear - epochArray[0];

        if (sysMonth < epochArray[1]) {
            computedAge--;
        } 
        else if (sysMonth === epochArray[1] && sysDay < epochArray[2]) {
            computedAge--;
        }

        return computedAge;
    }

    document.addEventListener("DOMContentLoaded", function() {
        try {
            // Apply metric to Aryan's tag
            var aryanNode = document.getElementById("calculated-age");
            if (aryanNode) {
                aryanNode.textContent = processTemporalAge(aryanBirth) + " Years Old";
            }

            // Apply metric to Malay's tag
            var malayNode = document.getElementById("malay-age");
            if (malayNode) {
                malayNode.textContent = processTemporalAge(malayBirth) + " Years Old";
            }
        } catch (faultCatch) {
            console.warn("[AGE RUNTIME] Matrix array intercept handled safely.");
        }
    });
})();
