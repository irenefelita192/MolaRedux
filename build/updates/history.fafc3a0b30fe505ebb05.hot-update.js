require("source-map-support").install();
exports.id = "history";
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/components/History.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".History-wrapper-2JRsq {\n    background-image: url('https://www.publicdomainpictures.net/pictures/180000/velka/sea-background-texture-14667654387Yx.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 76px 0 0 250px;\n}\n\n.History-containerOuter-2fOqw {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.History-containerInner-FBbUu {\n    overflow-y: auto;\n    width: 1220px;\n    margin: 0 auto;\n    height: calc(100vh - 76px);\n}\n\n.History-movieContainer-3Tv4n {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.History-movieDetailWrapper-2Ro_N {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.History-movieImageWrapper-3wUYt {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.History-movieImageWrapper-3wUYt > img {\n    width: 100%;\n}\n\n.History-movieDurationBar-3klp7 {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.History-moviePlayedBar-2PoUG {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.History-movieTitle-Wn2nZ {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.History-movieChapter-1dSMW {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.History-movieDuration-1kVCm {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1200px) {\n    .History-containerOuter-2fOqw {\n        width: 960px;\n    }\n\n    .History-containerInner-FBbUu {\n        width: 1000px;\n    }\n\n    .History-movieImageWrapper-3wUYt {\n        width: 240px;\n    }\n\n    .History-movieTitle-Wn2nZ {\n        font-size: 16px;\n    }\n    \n    .History-movieChapter-1dSMW {\n        font-size: 14px;\n    }\n    \n    .History-movieDuration-1kVCm {\n        font-size: 18px;\n    }\n}", "", {"version":3,"sources":["/Users/irene/Documents/Work/MolaRedux/src/routes/history/components/History.css"],"names":[],"mappings":"AAAA;IACI,6HAA6H;IAC7H,6BAA6B;IAC7B,uBAAuB;IACvB,wBAAwB;CAC3B;;AAED;IACI,iBAAiB;IACjB,cAAc;CACjB;;AAED;IACI,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,2BAA2B;CAC9B;;AAED;IACI,sBAAsB;IACtB,WAAW;IACX,oBAAoB;CACvB;;AAED;IACI,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,0BAA0B;CAC7B;;AAED;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,gBAAgB;CACnB;;AAED;IACI,YAAY;CACf;;AAED;GACG,mBAAmB;GACnB,aAAa;GACb,yBAAyB;GACzB,YAAY;GACZ,0BAA0B;GAC1B,eAAe;CACjB;;AAED;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,aAAa;CAChB;;AAED;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,oBAAoB;CACvB;;AAED;IACI;QACI,aAAa;KAChB;;IAED;QACI,cAAc;KACjB;;IAED;QACI,aAAa;KAChB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;;IAED;QACI,gBAAgB;KACnB;CACJ","file":"History.css","sourcesContent":[".wrapper {\n    background-image: url('https://www.publicdomainpictures.net/pictures/180000/velka/sea-background-texture-14667654387Yx.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 76px 0 0 250px;\n}\n\n.containerOuter {\n    overflow: hidden;\n    width: 1190px;\n}\n\n.containerInner {\n    overflow-y: auto;\n    width: 1220px;\n    margin: 0 auto;\n    height: calc(100vh - 76px);\n}\n\n.movieContainer {\n    display: inline-block;\n    width: 50%;\n    margin-bottom: 40px;\n}\n\n.movieDetailWrapper {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px;\n    color: #FFFFFF;\n    width: calc(100% - 305px);\n}\n\n.movieImageWrapper {\n    position: relative;\n    display: inline-block;\n    width: 265px;\n    cursor: pointer;\n}\n\n.movieImageWrapper > img {\n    width: 100%;\n}\n\n.movieDurationBar {\n   position: absolute;\n   bottom: 15px;\n   width: calc(100% - 40px);\n   height: 4px;\n   background-color: #C1C1C1;\n   margin: 0 20px;\n}\n\n.moviePlayedBar {\n    position: absolute;\n    background-color: #E10B14;\n    height: 100%;\n}\n\n.movieTitle {\n    font-size: 18px;\n    font-weight: bold;\n    padding-bottom: 4px;\n}\n\n.movieChapter {\n    font-size: 16px;\n    padding-bottom: 4px;\n}\n\n.movieDuration {\n    font-size: 20px;\n    padding-bottom: 4px;\n}\n\n@media screen and (max-width: 1200px) {\n    .containerOuter {\n        width: 960px;\n    }\n\n    .containerInner {\n        width: 1000px;\n    }\n\n    .movieImageWrapper {\n        width: 240px;\n    }\n\n    .movieTitle {\n        font-size: 16px;\n    }\n    \n    .movieChapter {\n        font-size: 14px;\n    }\n    \n    .movieDuration {\n        font-size: 18px;\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"wrapper": "History-wrapper-2JRsq",
	"containerOuter": "History-containerOuter-2fOqw",
	"containerInner": "History-containerInner-FBbUu",
	"movieContainer": "History-movieContainer-3Tv4n",
	"movieDetailWrapper": "History-movieDetailWrapper-2Ro_N",
	"movieImageWrapper": "History-movieImageWrapper-3wUYt",
	"movieDurationBar": "History-movieDurationBar-3klp7",
	"moviePlayedBar": "History-moviePlayedBar-2PoUG",
	"movieTitle": "History-movieTitle-Wn2nZ",
	"movieChapter": "History-movieChapter-1dSMW",
	"movieDuration": "History-movieDuration-1kVCm"
};

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9oaXN0b3J5LmZhZmMzYTBiMzBmZTUwNWViYjA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5IaXN0b3J5LXdyYXBwZXItMkpSc3Ege1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LnB1YmxpY2RvbWFpbnBpY3R1cmVzLm5ldC9waWN0dXJlcy8xODAwMDAvdmVsa2Evc2VhLWJhY2tncm91bmQtdGV4dHVyZS0xNDY2NzY1NDM4N1l4LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiA3NnB4IDAgMCAyNTBweDtcXG59XFxuXFxuLkhpc3RvcnktY29udGFpbmVyT3V0ZXItMmZPcXcge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTE5MHB4O1xcbn1cXG5cXG4uSGlzdG9yeS1jb250YWluZXJJbm5lci1GQmJVdSB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiAxMjIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NnB4KTtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVDb250YWluZXItM1R2NG4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllRGV0YWlsV3JhcHBlci0yUm9fTiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzA1cHgpO1xcbn1cXG5cXG4uSGlzdG9yeS1tb3ZpZUltYWdlV3JhcHBlci0zd1VZdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjY1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVJbWFnZVdyYXBwZXItM3dVWXQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVEdXJhdGlvbkJhci0za2xwNyB7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGJvdHRvbTogMTVweDtcXG4gICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxuICAgaGVpZ2h0OiA0cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogI0MxQzFDMTtcXG4gICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVQbGF5ZWRCYXItMlBvVUcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMTBCMTQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVUaXRsZS1XbjJuWiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5IaXN0b3J5LW1vdmllQ2hhcHRlci0xZFNNVyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLkhpc3RvcnktbW92aWVEdXJhdGlvbi0xa1ZDbSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5IaXN0b3J5LWNvbnRhaW5lck91dGVyLTJmT3F3IHtcXG4gICAgICAgIHdpZHRoOiA5NjBweDtcXG4gICAgfVxcblxcbiAgICAuSGlzdG9yeS1jb250YWluZXJJbm5lci1GQmJVdSB7XFxuICAgICAgICB3aWR0aDogMTAwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5IaXN0b3J5LW1vdmllSW1hZ2VXcmFwcGVyLTN3VVl0IHtcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgfVxcblxcbiAgICAuSGlzdG9yeS1tb3ZpZVRpdGxlLVduMm5aIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLkhpc3RvcnktbW92aWVDaGFwdGVyLTFkU01XIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLkhpc3RvcnktbW92aWVEdXJhdGlvbi0xa1ZDbSB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9pcmVuZS9Eb2N1bWVudHMvV29yay9Nb2xhUmVkdXgvc3JjL3JvdXRlcy9oaXN0b3J5L2NvbXBvbmVudHMvSGlzdG9yeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2SEFBNkg7SUFDN0gsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtHQUNHLG1CQUFtQjtHQUNuQixhQUFhO0dBQ2IseUJBQXlCO0dBQ3pCLFlBQVk7R0FDWiwwQkFBMEI7R0FDMUIsZUFBZTtDQUNqQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSTtRQUNJLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksYUFBYTtLQUNoQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjtDQUNKXCIsXCJmaWxlXCI6XCJIaXN0b3J5LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cucHVibGljZG9tYWlucGljdHVyZXMubmV0L3BpY3R1cmVzLzE4MDAwMC92ZWxrYS9zZWEtYmFja2dyb3VuZC10ZXh0dXJlLTE0NjY3NjU0Mzg3WXguanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmc6IDc2cHggMCAwIDI1MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyT3V0ZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTE5MHB4O1xcbn1cXG5cXG4uY29udGFpbmVySW5uZXIge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTIyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCk7XFxufVxcblxcbi5tb3ZpZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1vdmllRGV0YWlsV3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzA1cHgpO1xcbn1cXG5cXG4ubW92aWVJbWFnZVdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDI2NXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb3ZpZUltYWdlV3JhcHBlciA+IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW92aWVEdXJhdGlvbkJhciB7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGJvdHRvbTogMTVweDtcXG4gICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxuICAgaGVpZ2h0OiA0cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogI0MxQzFDMTtcXG4gICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLm1vdmllUGxheWVkQmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEwQjE0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb3ZpZVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLm1vdmllQ2hhcHRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLm1vdmllRHVyYXRpb24ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAuY29udGFpbmVyT3V0ZXIge1xcbiAgICAgICAgd2lkdGg6IDk2MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXJJbm5lciB7XFxuICAgICAgICB3aWR0aDogMTAwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZUltYWdlV3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1vdmllVGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAubW92aWVDaGFwdGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1vdmllRHVyYXRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiSGlzdG9yeS13cmFwcGVyLTJKUnNxXCIsXG5cdFwiY29udGFpbmVyT3V0ZXJcIjogXCJIaXN0b3J5LWNvbnRhaW5lck91dGVyLTJmT3F3XCIsXG5cdFwiY29udGFpbmVySW5uZXJcIjogXCJIaXN0b3J5LWNvbnRhaW5lcklubmVyLUZCYlV1XCIsXG5cdFwibW92aWVDb250YWluZXJcIjogXCJIaXN0b3J5LW1vdmllQ29udGFpbmVyLTNUdjRuXCIsXG5cdFwibW92aWVEZXRhaWxXcmFwcGVyXCI6IFwiSGlzdG9yeS1tb3ZpZURldGFpbFdyYXBwZXItMlJvX05cIixcblx0XCJtb3ZpZUltYWdlV3JhcHBlclwiOiBcIkhpc3RvcnktbW92aWVJbWFnZVdyYXBwZXItM3dVWXRcIixcblx0XCJtb3ZpZUR1cmF0aW9uQmFyXCI6IFwiSGlzdG9yeS1tb3ZpZUR1cmF0aW9uQmFyLTNrbHA3XCIsXG5cdFwibW92aWVQbGF5ZWRCYXJcIjogXCJIaXN0b3J5LW1vdmllUGxheWVkQmFyLTJQb1VHXCIsXG5cdFwibW92aWVUaXRsZVwiOiBcIkhpc3RvcnktbW92aWVUaXRsZS1XbjJuWlwiLFxuXHRcIm1vdmllQ2hhcHRlclwiOiBcIkhpc3RvcnktbW92aWVDaGFwdGVyLTFkU01XXCIsXG5cdFwibW92aWVEdXJhdGlvblwiOiBcIkhpc3RvcnktbW92aWVEdXJhdGlvbi0xa1ZDbVwiXG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9