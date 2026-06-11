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
// SHOWCASE SUB-TAB CONTROLLER
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

    // Update Headline based on tab selected
    var headlineDisplay = document.getElementById('dashboard-tab-headline');
    if (targetSubViewId === 'showcase-featured') headlineDisplay.textContent = "Featured Projects";
    if (targetSubViewId === 'showcase-apps') headlineDisplay.textContent = "Web & Applications";
    if (targetSubViewId === 'showcase-games') headlineDisplay.textContent = "Interactive Media";
}

// -------------------------------------------------------------------------
// SECURE EXECUTIVE AGE CALCULATION ENGINE
// DESCRIPTION: Handles secure birthday configurations via bit arrays.
// -------------------------------------------------------------------------
(function() {
    "use strict";
    var bitValidationArray = [2013, 4, 12];

    function evaluateSecureAgeMetric(epochPacket) {
        var clockSource = new Date();
        var sysYear = clockSource.getFullYear();
        var sysMonth = clockSource.getMonth() + 1;
        var sysDay = clockSource.getDate();

        var computedInteger = sysYear - epochPacket[0];

        if (sysMonth < epochPacket[1]) {
            computedInteger--;
        } 
        else if (sysMonth === epochPacket[1] && sysDay < epochPacket[2]) {
            computedInteger--;
        }

        return computedInteger;
    }

    document.addEventListener("DOMContentLoaded", function() {
        try {
            var displayNode = document.getElementById("calculated-age");
            if (displayNode) {
                var validatedAge = evaluateSecureAgeMetric(bitValidationArray);
                displayNode.textContent = validatedAge + " Years Old";
            }
        } catch (faultCatch) {
            console.warn("[RUNTIME PROXY INTERCEPT] Dynamic timeline calculation exception caught: ", faultCatch);
        }
    });
})();
