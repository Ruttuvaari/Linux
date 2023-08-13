// Ruttuvaari's overrides

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
user_pref("signon.management.page.breach-alerts.enabled", false); // Disable alerts

// Privacy & Security: Forms and Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // Disable autofill addresses
user_pref("extensions.formautofill.creditCards.enabled", false); // Disable autofill credit cards

// Sync
user_pref("identity.fxaccounts.enabled", false); // Disable sync
user_pref("extensions.pocket.enabled", false); // Disable pocket
