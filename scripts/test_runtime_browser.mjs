// Compatibility entry point. The maintained scenario uses the shared domain contract.
process.argv[2] ||= 'scripts/test_closed_loop_scenarios.js';
await import('./audit_browser.mjs');
