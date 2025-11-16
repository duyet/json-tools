/**
 * JSON Parser/Editor
 * Initializes and manages the dual-pane JSON editor interface
 * @module JSONParser
 */

(function () {
  'use strict';

  /**
   * Error message handler
   * @namespace ErrorHandler
   */
  const ErrorHandler = {
    element: null,

    /**
     * Initialize the error handler
     */
    init() {
      this.element = document.getElementById('errorMessage');
      if (!this.element) {
        console.error('Error message element not found');
      }
    },

    /**
     * Display an error message to the user
     * @param {string} message - The error message to display
     */
    show(message) {
      if (!this.element) {
        console.error('Error element not initialized');
        return;
      }

      this.element.textContent = message;
      this.element.classList.add('visible');
      this.element.setAttribute('role', 'alert');
      this.element.setAttribute('aria-live', 'assertive');
    },

    /**
     * Hide the error message
     */
    hide() {
      if (!this.element) {
        return;
      }

      this.element.textContent = '';
      this.element.classList.remove('visible');
      this.element.removeAttribute('role');
      this.element.removeAttribute('aria-live');
    }
  };

  /**
   * JSON Editor Options for the code editor (left pane)
   * @type {Object}
   */
  const jsonEditorOptions = {
    mode: 'code',
    modes: ['code', 'tree'],
    indentation: 2,

    /**
     * Error callback for editor validation errors
     * @param {Error} err - The validation error
     */
    error(err) {
      ErrorHandler.show(err.toString());
    },

    /**
     * Change callback when editor content changes
     * Syncs content from code editor to view editor
     */
    change() {
      ErrorHandler.hide();

      if (window.jsoneditor && window.jsonview) {
        try {
          const json = window.jsoneditor.get();
          window.jsonview.set(json);
        } catch (e) {
          ErrorHandler.show(`Invalid JSON: ${e.message}`);
          console.error('JSON parsing error:', e);
        }
      }
    }
  };

  /**
   * JSON View Options for the view editor (right pane)
   * @type {Object}
   */
  const jsonViewOptions = {
    mode: 'view',
    modes: ['tree', 'view', 'form', 'code', 'text'],
    onEditable() {
      return false; // Make view pane read-only
    }
  };

  /**
   * Sample JSON data for initial display
   * @type {Object}
   */
  const sampleJSON = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { a: 'b', c: 'd' },
    String: 'Hello World'
  };

  /**
   * Initialize the JSON parser application
   * Sets up both editor instances and error handling
   */
  function initializeParser() {
    try {
      // Initialize error handler
      ErrorHandler.init();

      // Get editor containers
      const jsoneditorContainer = document.getElementById('jsoneditor');
      const jsonviewContainer = document.getElementById('jsonview');

      if (!jsoneditorContainer || !jsonviewContainer) {
        throw new Error('Editor containers not found in DOM');
      }

      // Verify JSONEditor library is loaded
      if (typeof JSONEditor === 'undefined') {
        throw new Error('JSONEditor library not loaded');
      }

      // Initialize code editor (left pane)
      window.jsoneditor = new JSONEditor(jsoneditorContainer, jsonEditorOptions, sampleJSON);

      // Initialize view editor (right pane)
      window.jsonview = new JSONEditor(jsonviewContainer, jsonViewOptions, sampleJSON);

      console.info('JSON Parser initialized successfully');
    } catch (error) {
      console.error('Failed to initialize JSON Parser:', error);
      ErrorHandler.show(`Initialization error: ${error.message}`);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeParser);
  } else {
    initializeParser();
  }
})();
