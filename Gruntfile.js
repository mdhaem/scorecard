module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				jshintrc: true,
				ignores: ['app/tests/**/*.js']
			},
    		files: ['app/**/*.js']
  		},
  		karma: {
		  unit: {
		    configFile: 'app/tests/karma.conf.js',
		    autoWatch: true,
		    background: true,
    		singleRun: false
		  }
		},
  		watch: {
			jshint: {
				files: ['app/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			}
		}
  	});

 	grunt.registerTask('default', [
		'jshint', 
		//'concat', 
		// 'csslint', 
		// 'cssmin', 
		// 'autoprefixer' 
		// 'less',
		// 'imagemin',
		'watch'
	]);


};