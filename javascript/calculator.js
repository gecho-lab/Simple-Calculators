 const display = document.getElementById('Display');
        
        function allColume(Input) {
            display.value += Input;
        }
        
        function calculat() {
            try {
                display.value = eval(display.value);
            } catch (Error) {
                display.value = "Error";
            }
        }
        
        function clearAll() {
            display.value = "";
        }
         document.addEventListener('keydown', function(event) {
          const key = event.key;
          if ('0123456789'.includes(key)) {
              allColume(key);
          } else if (key === 'Enter') {
              calculat();
          } else if (key === 'Backspace') {
              display.value = display.value.slice(0, -1);
          } else if (key === '+' || key === '-' || key === '*' || key === '/') {
              allColume(key.replace('*', 'x'));
          }
        });