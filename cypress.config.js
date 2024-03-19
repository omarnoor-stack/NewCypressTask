const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
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
