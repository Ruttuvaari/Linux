// Ruttuvaari's overrides

// Tweaks: Frame Rate
user_pref("layout.frame_rate", 120); // Force frame rate

// Tweaks: Hardware video acceleration
// ### Enable "gfx.webrender.all" if about:support /Graphics/Compositing/ is not WebRender ###
// ### Confirm GPU Decoding with nvtop (enable decoder from options) https://github.com/Syllo/nvtop ###
// user_pref("gfx.webrender.all", true); // Hardware WebRender force enabled
user_pref("media.ffmpeg.vaapi.enabled", true); // Enable VA-API

// Tweaks: Cache
user_pref("browser.cache.disk.enable", false); // Disable disk cache
user_pref("browser.cache.memory.enable", true); // Enable RAM cache
user_pref("browser.cache.memory.capacity", 1048576); // RAM cache size (KB) 1048576=1GB

// Tweaks: Bookmarks
user_pref("browser.bookmarks.autoExportHTML", true); // Export bookmarks each time the browser shuts down

// General: Language and Appearance
user_pref("layout.css.prefers-color-scheme.content-override", 0); // Dark mode
user_pref("layout.spellcheckDefault", 0); // Disable spell check

// General: DRM Management
user_pref("media.eme.enabled", true); // Enable DRM-controlled content

// General: Browsing
user_pref("widget.gtk.overlay-scrollbars.enabled", false); // Always show scrollbars

// Home: New Windows and Tabs
user_pref("browser.startup.page", 1); // Start; Homepage
user_pref("browser.startup.homepage", "about:home"); // Homepage
user_pref("browser.newtabpage.enabled", true); // New tab; Homepage

// Home: Firefox Home Content
user_pref("browser.newtabpage.activity-stream.topSitesRows", 4); // Topsites 4 rows
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Disable sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Disable recent activity
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // Disable visited pages
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // Disable bookmarks
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // Disable recent downloads
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Disable pocket

// Search: Search Bar
user_pref("keyword.enabled", true); // Search from the urlbar

// Search: Search Suggestions
user_pref("browser.urlbar.showSearchSuggestionsFirst", false); // Disable search suggestion first

// Privacy & Security: Logins and Passwords
user_pref("signon.rememberSignons", false); // Disable save logins
user_pref("signon.autofillForms", false); // Disable autofill
user_pref("signon.generation.enabled", false); // Disable strong passwords
user_pref("signon.firefoxRelay.feature", false); // Disable Firefox Relay
user_pref("signon.management.page.breach-alerts.enabled", false); // Disable alerts

// Privacy & Security: Permissions
user_pref("permissions.default.geo", 2); // Block new Location requests
user_pref("permissions.default.camera", 2); // Block new Camera requests
user_pref("permissions.default.microphone", 2); // Block new Microphone requests
user_pref("permissions.default.xr", 2); // Block new Virtual Reality requests

// Privacy & Security: Forms and Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // Disable autofill addresses
user_pref("extensions.formautofill.creditCards.enabled", false); // Disable autofill credit cards

// Privacy & Security: Security
user_pref("browser.safebrowsing.malware.enabled", false); // Disable "Block dangerous and deceptive content"
user_pref("browser.safebrowsing.phishing.enabled", false); // Disable "Block dangerous and deceptive content"
user_pref("browser.safebrowsing.downloads.enabled", false); // Disable "Block dangerous downloads"
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); // Disable "Warn about unwanted software"
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); // Disable "Warn about uncommon software"

// Privacy & Security: DNS over HTTPS
user_pref("network.trr.mode", 5); // Use default DNS resolver

// Sync
user_pref("identity.fxaccounts.enabled", false); // Disable sync
user_pref("extensions.pocket.enabled", false); // Disable pocket
