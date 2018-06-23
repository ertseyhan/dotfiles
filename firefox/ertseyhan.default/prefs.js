/*
 *  ---- SECTION: HTML5/APIs/DOM ----
 */

// PREF: Disable vibrator API
user_pref("dom.vibrator.enabled", false);

// PREF: Disable web notifications
user_pref("dom.webnotifications.enabled", false);

// PREF: Disable sensor API
user_pref("device.sensors.enabled", false);

// PREF: Spoof dual-core CPU
user_pref("dom.maxHardwareConcurrency", 2);

// PREF: Disable network API
user_pref("dom.network.enabled", false);

// PREF: Disable Web Audio API
user_pref("dom.webaudio.enabled", false);

// PREF: Disable DOM timing API
user_pref("dom.enable_performance", false);

// PREF: Disable resource timing API
user_pref("dom.enable_resource_timing", false);

// PREF: Disable virtual reality devices APIs
user_pref("dom.vr.enabled", false);

// PREF: Disable Location-Aware Browsing (geolocation)
user_pref("geo.enabled", false);

// PREF: Disable gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);

// PREF: Disable pinging URIs specified in HTML <a> ping= attributes
user_pref("browser.send_pings", false);

// PREF: When browser pings are enabled, only allow pinging the same host as the origin page
user_pref("browser.send_pings.require_same_host", true);

// PREF: Disable "beacon" asynchronous HTTP transfers (used for analytics)
user_pref("beacon.enabled", false);

// PREF: Disables the WebRTC function, which gives away your local ips.
user_pref("webgl.disabled", true);
// PREF: When webGL is enabled, use the minimum capability mode
user_pref("webgl.min_capability_mode", true);
// PREF: When webGL is enabled, disable webGL extensions
user_pref("webgl.disable-extensions", true);
// PREF: When webGL is enabled, force enabling it even when layer acceleration is not supported
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// PREF: When webGL is enabled, do not expose information about the graphics driver
user_pref("webgl.enable-debug-renderer-info", false);

// PREF: When geolocation is enabled, don't log geolocation requests to the console
user_pref("geo.wifi.logging.enabled", false);

// PREF: Make sure the User Timing API does not provide a new high resolution timestamp
user_pref("dom.enable_user_timing", false);

// PREF: When geolocation is enabled, use Mozilla geolocation service instead of Google
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// PREF: Disable speech synthesis
user_pref("media.webspeech.synth.enabled", false);

// PREF: Disable leaking network/browser connection information via Javascript
// Network Information API provides general information about the system's connection type (WiFi, cellular, etc.)
user_pref("dom.netinfo.enabled", false);

// PREF: Disable speech recognition
user_pref("media.webspeech.recognition.enable", false);

// Prevent Javascript UI Meddling
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);

// Disable every single WebRTC related setting
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);

// PREF: Disable raw TCP socket support (mozTCPSocket)
user_pref("dom.mozTCPSocket.enabled", false);

// PREF: Disable WebRTC getUserMedia, screen sharing, audio capture, video capture
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");


/*
 *  ---- SECTION: Firefox (Anti-)Features/Components ----
 */
 
 // Disable Tracking Protection Intro
user_pref("privacy.trackingprotection.introURL", "");
user_pref("privacy.trackingprotection.introCount", 20);

// Disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);

// Disable Firefox Screenshots
user_pref("extensions.screenshots.disabled", true);

// PREF: Disable all DRM content
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

// PREF: Disable extension discovery
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");

// PREF: Disable Auto Update/Checking
// NOTICE: Fully automatic updates are disabled and left to package management systems on Linux.
// 		   Windows users may want to change this setting.
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);

// PREF: Disallow Necko to do A/B testing
user_pref("network.allow-experiments", false);

// PREF: Enable blocking reported attack sites
user_pref("browser.safebrowsing.malware.enabled", false);

// PREF: Disable WebIDE
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);

// PREF: Disable remote debugging
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false);

// PREF: Enable contextual identity Containers feature
user_pref("privacy.userContext.enabled", true);

// PREF: Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
user_pref("dom.flyweb.enabled", false);

// PREF: Disable SHIELD
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);

// PREF: Do not open a browser tab on first run
user_pref("datareporting.policy.firstRunURL", "");
user_pref("datareporting.policy.dataSubmissionEnabled", true);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 2);
user_pref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "1509965641500");

// PREF: Disable Heartbeat (Mozilla user rating telemetry)
user_pref("browser.selfsupport.url", "");

// PREF: Firefox using Google Analytics on "Get Add-ons" panel
user_pref("extensions.getAddons.showPane", false);

// PREF: Disable the UITour backend
user_pref("browser.uitour.enabled", false);

// PREF: Disable Pocket
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.enabled", false);
user_pref("browser.toolbarbuttons.introduced.pocket-button", true);

// PREF: Enable blocking reported web forgeries
user_pref("browser.safebrowsing.phishing.enabled", false);

// PREF: Enable Firefox Tracking Protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// PREF: Disable querying Google Application Reputation database for downloaded binary files
user_pref("browser.safebrowsing.downloads.remote.enabled", false);


/*
 *  ---- SECTION: Automatic connections ----
 */

// PREF: Disable SSDP
user_pref("browser.casting.enabled", false);

// PREF: Disable prefetching of <link rel="next"> URLs
user_pref("network.prefetch-next", false);

// PREF: Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// PREF: Disable the predictive service (Necko)
user_pref("network.predictor.enabled", false);

// PREF: Reject .onion hostnames before passing the to DNS
user_pref("network.dns.blockDotOnion", true);

// PREF: Disable speculative pre-connections
user_pref("network.http.speculative-parallel-limit", 0);

// PREF: Disable downloading homepage snippets/messages from Mozilla
user_pref("browser.aboutHomeSnippets.updateUrl", "");


/*
 *  ---- SECTION: HTTP ----
 */
 
// PREF: Do Not Track HTTP header
user_pref("privacy.donottrackheader.enabled", true);

// PREF: Disallow NTLMv1
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1",	false);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);

// PREF: Enable CSP 1.1 script-nonce directive support
user_pref("security.csp.experimentalEnabled", true);

// PREF: Enable Subresource Integrity
user_pref("security.sri.enable", true);

//PREF: Don't send referer headers when following links across different domains
user_pref("network.http.referer.XOriginPolicy", 2);

// PREF: Enable Content Security Policy (CSP)
user_pref("security.csp.enable", true);


/*
 *  ---- SECTION: Caching ----
 */

// PREF: Disable password manager
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);

// PREF: Delete temporary files on exit
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// PREF: Set time range to "Everything" as default in "Clear Recent History"
user_pref("privacy.sanitize.timeSpan", 0);

// PREF: Show in-content login form warning UI for insecure login fields
user_pref("security.insecure_field_warning.contextual.enabled", true);

// PREF: Do not create screenshots of visited pages (relates to the "new tab page" feature)
user_pref("browser.pagethumbnails.capturing_disabled", true);

// PREF: Clear everything but Site Preferences, Cookies, History and Session in "Clear Recent History"
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.history", false);
user_pref("privacy.cpd.sessions", false);


/*
 *  ---- SECTION: Misc ----
 */

// PREF: Brings back the Backspace shortcut
user_pref("browser.backspace_action", 0);

// PREF: Don't use any proxy
user_pref("network.proxy.type", 0);

// Disable initial RSS intro
user_pref("browser.feeds.showFirstRunUI", false);

// PREF: No Default Bookmarks
user_pref("browser.places.smartBookmarksVersion", 8);
user_pref("browser.bookmarks.showMobileBookmarks", false);

// PREF: Disable face detection
user_pref("camera.control.face_detection.enabled", false);

// PREF: Auto send crash reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", true);

// Disable Pop-up blocker warning
user_pref("privacy.popups.showBrowserMessage", false);

// PREF: Don't ask to reset Firefox
user_pref("browser.disableResetPrompt", true);

// PREF: Set default download folder
user_pref("browser.download.dir", "/home/ertseyhan/Downloads");

// PREF: Disable about:config warning
user_pref("general.warnOnAboutConfig",false);

// PREF: Set "Inspector" as default tool
user_pref("devtools.toolbox.selectedTool", "inspector");

// PREF: Enable scrolling with mouse wheel
user_pref("general.autoScroll", true);

// Set about:newtab intro panels as shown before
user_pref("browser.newtabpage.introShown", true);

// PREF: Set developer edition promo as shown before
user_pref("devtools.devedition.promo.shown", true);

// PREF: Disable Firefox Photon Onboarding Tour
user_pref("browser.onboarding.newtour", "");
user_pref("browser.onboarding.updatetour", "");
user_pref("browser.onboarding.notification.finished", true);

// PREF: Set dark theme as default for Developer Tools
user_pref("devtools.theme", "dark");

// PREF: Don't trim HTTP off of URLs in the address bar.
user_pref("browser.urlbar.trimURLs", false);

// PREF: Disable video stats to reduce fingerprinting threat
user_pref("media.video_stats.enabled", false);

// PREF: Disable GeoIP lookup on your address to set default search engine region
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.countryCode", "US");

// PREF: Don't monitor OS online/offline connection state
user_pref("network.manage-offline-status", false);

// PREF: Set DuckDuckGo as default search engine
user_pref("browser.startup.homepage", "https://duckduckgo.com");

// PREF: Open my personal add-on collection at the first launch
user_pref("startup.homepage_welcome_url", "https://addons.mozilla.org/en-US/firefox/collections/ertseyhan/personal");

// PREF: Don't use Mozilla-provided location-specific search engines
user_pref("browser.search.geoSpecificDefaults", false);

// PREF: Prevent leaking application locale/date format using JavaScript
user_pref("javascript.use_us_english_locale", true);

// PREF: Do not automatically send selection to clipboard on some Linux platforms
user_pref("clipboard.autocopy", false);

// PREF: Set Accept-Language HTTP header to en-US regardless of Firefox localization
user_pref("intl.accept_languages", "en-us, en");

// PREF: Don't use OS values to determine locale, force using Firefox locale setting
user_pref("intl.locale.matchOS", false);

// PREF: Make pop-ups open in a new tab instead of a separate window
user_pref("browser.link.open_newwindow.restriction", 0);

/*
 *  ---- SECTION: Cryptography ----
 */

// PREF: Only allow TLS 2
user_pref("security.tls.version.min", "2");

// PREF: Disallow SHA-1
user_pref("security.pki.sha1_enforcement_level", 1);

// PREF: Enfore Public Key Pinning
user_pref("security.cert_pinning.enforcement_level", "2");

// PREF: Enable HSTS preload list (pre-set HSTS sites list provided by Mozilla)
user_pref("network.stricttransportsecurity.preloadlist", true);

// PREF: Enable OCSP Must-Staple support (Firefox >= 45)
user_pref("security.ssl.enable_ocsp_must_staple", true);

// PREF: Enable OCSP Stapling support
user_pref("security.ssl.enable_ocsp_stapling", true);

// PREF: Warn the user when server doesn't support RFC 5746 ("safe" renegotiation)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// PREF: Disable TLS Session Tickets
user_pref("security.ssl.disable_session_identifiers", true);


/*
 *  ---- SECTION: Cipher Suites ----
 */

// PREF: Disable null ciphers
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);

// PREF: Disable SEED cipher
user_pref("security.ssl3.rsa_seed_sha", false);

// PREF: Disable 40/56/128-bit ciphers
// 40-bit ciphers
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
// 56-bit ciphers
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
// 128-bit ciphers
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_camellia_128_sha",	false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);

// PREF: Disable RC4
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);

// PREF: Disable 3DES (effective key size is < 128)
user_pref("security.ssl3.rsa_des_ede3_sha",	false);
user_pref("security.ssl3.dhe_dss_des_ede3_sha",	false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha",	false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);

// PREF: Disable ciphers with ECDH (non-ephemeral)
user_pref("security.ssl3.ecdh_rsa_aes_256_sha",	false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);

// PREF: Disable 256 bits ciphers without PFS
user_pref("security.ssl3.rsa_camellia_256_sha", false);

// PREF: Enable ciphers with ECDHE and key size > 128bits
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true); // 0xc014
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true); // 0xc00a

// PREF: Enable GCM ciphers (TLSv1.2 only)
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true); // 0xc02b
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",	true); // 0xc02f

// PREF: Enable ChaCha20 and Poly1305 (Firefox >= 47)
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);

// PREF: Disable ciphers susceptible to the logjam attack
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);

// PREF: Disable ciphers with DSA (max 1024 bits)
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha",	false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha",	false);

// PREF: Fallbacks due compatibility reasons
user_pref("security.ssl3.rsa_aes_256_sha", true); // 0x35
user_pref("security.ssl3.rsa_aes_128_sha", true); // 0x2f


/*
 *  ---- SECTION: Extensions/Plugins ----
 */

// PREF: Opt-out of add-on metadata updates
user_pref("extensions.getAddons.cache.enabled", false);

// PREF: Ensure you have a security delay when installing add-ons (milliseconds)
user_pref("security.dialog_enable_delay", 1000);

// PREF: Opt-out of add-on metadata updates
user_pref("extensions.getAddons.cache.enabled", false);

// PREF: Disable sending Flash Player crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// PREF: When Flash crash reports are enabled, don't send the visited URL in the crash report
user_pref("dom.ipc.plugins.reportCrashURL", false);

// PREF: Disable Shumway (Mozilla Flash renderer)
user_pref("shumway.disabled", true);

// PREF: Decrease system information leakage to Mozilla blocklist update servers
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");

// PREF: Enable add-on and certificate blocklists (OneCRL) from Mozilla
user_pref("extensions.blocklist.enabled", true);
user_pref("services.blocklist.update_enabled", true);


/*
 *  ---- SECTION: UI Related ----
 */

// PREF: Set UI Density as compact
user_pref("browser.uidensity", 1);

// PREF: Set Dark theme as default
user_pref("lightweightThemes.selectedThemeID", "firefox-compact-dark@mozilla.org");

// PREF: Display a notification bar when websites offer data for offline use
user_pref("browser.offline-apps.notify", true);

// PREF: Get rid of the yellow banner that blocks bookmark toolbar
user_pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 0);
user_pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 0);

// PREF: Disable the "new tab page" feature and show a blank tab instead
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.url", "about:blank");

// PREF: Enable insecure password warnings (login forms in non-HTTPS pages)
user_pref("security.insecure_password.ui.enabled", true);

// Disable new tab tile ads & preload
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");

// PREF: Force Punycode for Internationalized Domain Names
user_pref("network.IDN_show_punycode", true);

// PREF: Activity Stream related preferences
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// PREF: UI Layout Customization
user_pref("browser.pageActions.persistedActions", "{\"version\":1,\"ids\":[\"bookmark\",\"bookmarkSeparator\",\"copyURL\",\"emailLink\",\"sendToDevice\"],\"idsInUrlbar\":[]}");
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[\"https-everywhere_eff_org-browser-action\",\"_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action\",\"_5657c026-efc3-4860-b43b-16e4eaa8a9aa_-browser-action\",\"redirector_einaregilsson_com-browser-action\",\"87677a2c52b84ad3a151a4a72f5bd3c4_jetpack-browser-action\",\"jid1-bofifl9vbdl2zq_jetpack-browser-action\",\"jid1-mnnxcxisbpnsxq_jetpack-browser-action\",\"bloodyvikings_ffs_bplaced_net-browser-action\",\"simple-translate_sienori-browser-action\",\"jid1-nmve2op40qeqdq_jetpack-browser-action\",\"_01d00700-8374-44c2-bede-ddfc00631ad4_-browser-action\",\"_66d854c2-fd1b-4857-bd0a-7d220e4834da_-browser-action\"],\"PersonalToolbar\":[\"personal-bookmarks\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"urlbar-container\",\"library-button\",\"jid1-tmndp6cdkgxlcq_jetpack-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"_174b2d58-b983-4501-ab4b-07e71203cb43_-browser-action\",\"_e0b8c461-f8fb-49b4-8373-fe32e9252800_-browser-action\",\"_b3e677f4-1150-4387-8629-da738260a48e_-browser-action\",\"contact_lesspass_com-browser-action\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"toolbar-menubar\":[\"menubar-items\"]},\"seen\":[\"developer-button\",\"webide-button\",\"jid1-tmndp6cdkgxlcq_jetpack-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"https-everywhere_eff_org-browser-action\",\"jid1-mnnxcxisbpnsxq_jetpack-browser-action\",\"87677a2c52b84ad3a151a4a72f5bd3c4_jetpack-browser-action\",\"_174b2d58-b983-4501-ab4b-07e71203cb43_-browser-action\",\"_5657c026-efc3-4860-b43b-16e4eaa8a9aa_-browser-action\",\"_e0b8c461-f8fb-49b4-8373-fe32e9252800_-browser-action\",\"_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action\",\"simple-translate_sienori-browser-action\",\"bloodyvikings_ffs_bplaced_net-browser-action\",\"contact_lesspass_com-browser-action\",\"jid1-nmve2op40qeqdq_jetpack-browser-action\",\"_66d854c2-fd1b-4857-bd0a-7d220e4834da_-browser-action\",\"_01d00700-8374-44c2-bede-ddfc00631ad4_-browser-action\",\"redirector_einaregilsson_com-browser-action\",\"_b3e677f4-1150-4387-8629-da738260a48e_-browser-action\",\"jid1-bofifl9vbdl2zq_jetpack-browser-action\"],\"dirtyAreaCache\":[\"PersonalToolbar\",\"nav-bar\",\"TabsToolbar\",\"toolbar-menubar\",\"widget-overflow-fixed-list\"],\"currentVersion\":12,\"newElementCount\":8}");
