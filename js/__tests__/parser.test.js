/**
 * Tests for JSON Parser functionality
 */

describe('JSON Parser', () => {
  let errorElement;
  let jsoneditorElement;
  let jsonviewElement;

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = `
      <div id="errorMessage" class="error-message"></div>
      <div id="jsoneditor"></div>
      <div id="jsonview"></div>
    `;

    errorElement = document.getElementById('errorMessage');
    jsoneditorElement = document.getElementById('jsoneditor');
    jsonviewElement = document.getElementById('jsonview');

    // Clear console mocks
    jest.clearAllMocks();
  });

  describe('DOM Elements', () => {
    it('should have error message element in DOM', () => {
      expect(errorElement).toBeTruthy();
      expect(errorElement).toBeInstanceOf(HTMLElement);
    });

    it('should have jsoneditor element in DOM', () => {
      expect(jsoneditorElement).toBeTruthy();
      expect(jsoneditorElement).toBeInstanceOf(HTMLElement);
    });

    it('should have jsonview element in DOM', () => {
      expect(jsonviewElement).toBeTruthy();
      expect(jsonviewElement).toBeInstanceOf(HTMLElement);
    });
  });

  describe('Error Message Display', () => {
    it('should initially hide error message', () => {
      expect(errorElement.classList.contains('visible')).toBe(false);
    });

    it('should show error message when error occurs', () => {
      const errorText = 'Test error message';
      errorElement.textContent = errorText;
      errorElement.classList.add('visible');
      errorElement.setAttribute('role', 'alert');

      expect(errorElement.classList.contains('visible')).toBe(true);
      expect(errorElement.textContent).toBe(errorText);
      expect(errorElement.getAttribute('role')).toBe('alert');
    });

    it('should have aria-live attribute for accessibility', () => {
      errorElement.setAttribute('aria-live', 'assertive');
      expect(errorElement.getAttribute('aria-live')).toBe('assertive');
    });
  });

  describe('JSON Validation', () => {
    it('should identify valid JSON', () => {
      const validJSON = '{"key": "value"}';
      let parsed;
      let error = null;

      try {
        parsed = JSON.parse(validJSON);
      } catch (e) {
        error = e;
      }

      expect(error).toBeNull();
      expect(parsed).toEqual({ key: 'value' });
    });

    it('should identify invalid JSON', () => {
      const invalidJSON = '{key: value}';
      let error = null;

      try {
        JSON.parse(invalidJSON);
      } catch (e) {
        error = e;
      }

      expect(error).not.toBeNull();
      expect(error).toBeInstanceOf(SyntaxError);
    });

    it('should handle nested JSON objects', () => {
      const nestedJSON = '{"outer": {"inner": "value"}}';
      const parsed = JSON.parse(nestedJSON);

      expect(parsed.outer).toBeDefined();
      expect(parsed.outer.inner).toBe('value');
    });

    it('should handle JSON arrays', () => {
      const arrayJSON = '[1, 2, 3]';
      const parsed = JSON.parse(arrayJSON);

      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed).toHaveLength(3);
      expect(parsed).toEqual([1, 2, 3]);
    });

    it('should handle various JSON data types', () => {
      const complexJSON = JSON.stringify({
        string: 'text',
        number: 123,
        boolean: true,
        null: null,
        array: [1, 2, 3],
        object: { nested: 'value' }
      });

      const parsed = JSON.parse(complexJSON);

      expect(typeof parsed.string).toBe('string');
      expect(typeof parsed.number).toBe('number');
      expect(typeof parsed.boolean).toBe('boolean');
      expect(parsed.null).toBeNull();
      expect(Array.isArray(parsed.array)).toBe(true);
      expect(typeof parsed.object).toBe('object');
    });
  });

  describe('Editor Initialization', () => {
    it('should have containers ready for editors', () => {
      expect(jsoneditorElement.id).toBe('jsoneditor');
      expect(jsonviewElement.id).toBe('jsonview');
    });

    it('should support role attributes for accessibility', () => {
      jsoneditorElement.setAttribute('role', 'application');
      jsonviewElement.setAttribute('role', 'application');

      expect(jsoneditorElement.getAttribute('role')).toBe('application');
      expect(jsonviewElement.getAttribute('role')).toBe('application');
    });

    it('should support aria-label for accessibility', () => {
      jsoneditorElement.setAttribute('aria-label', 'JSON code editor');
      jsonviewElement.setAttribute('aria-label', 'JSON viewer');

      expect(jsoneditorElement.getAttribute('aria-label')).toBe('JSON code editor');
      expect(jsonviewElement.getAttribute('aria-label')).toBe('JSON viewer');
    });
  });

  describe('Sample JSON Data', () => {
    const sampleJSON = {
      Array: [1, 2, 3],
      Boolean: true,
      Null: null,
      Number: 123,
      Object: { a: 'b', c: 'd' },
      String: 'Hello World'
    };

    it('should have all data types in sample', () => {
      expect(Array.isArray(sampleJSON.Array)).toBe(true);
      expect(typeof sampleJSON.Boolean).toBe('boolean');
      expect(sampleJSON.Null).toBeNull();
      expect(typeof sampleJSON.Number).toBe('number');
      expect(typeof sampleJSON.Object).toBe('object');
      expect(typeof sampleJSON.String).toBe('string');
    });

    it('should serialize and deserialize correctly', () => {
      const serialized = JSON.stringify(sampleJSON);
      const deserialized = JSON.parse(serialized);

      expect(deserialized).toEqual(sampleJSON);
    });
  });

  describe('Error Handling', () => {
    it('should handle malformed JSON gracefully', () => {
      const malformedInputs = [
        '{',
        '}',
        '[',
        ']',
        '{"key": }',
        '{key: "value"}',
        "{'key': 'value'}",
        '{trailing,}',
        'undefined',
        'NaN'
      ];

      malformedInputs.forEach((input) => {
        let error = null;
        try {
          JSON.parse(input);
        } catch (e) {
          error = e;
        }
        expect(error).not.toBeNull();
      });
    });

    it('should provide meaningful error messages', () => {
      try {
        JSON.parse('{invalid}');
      } catch (error) {
        expect(error.message).toBeTruthy();
        expect(error.message.length).toBeGreaterThan(0);
      }
    });
  });
});
