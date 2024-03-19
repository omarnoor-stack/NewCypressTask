const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    watchForFileChanges:true,
    trashAssetsBeforeRuns:true,
    screenshotOnRunFailure:false,
    screenshotsFolder:"MyScreenshot",

    video:true,
    videosFolder:"myVideo",
    videoCompression :20 , 
  },
});
