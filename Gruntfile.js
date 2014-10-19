module.exports = function (grunt) {
 
    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'index.html', dest: 'css/style-min.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'css/style-min.css', dest: 'css/style-min.css' }
                ]
            }
        }
    });
 
    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
 
    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin']);
 
};