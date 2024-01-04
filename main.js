    //Fahrenheit to Celsius
    const temp = () => {
        const fv = document.getElementById('t1').value;
        let newcel = (fv - 32) * 5 / 9;
        document.getElementById('t2').value = newcel;
    }

    //Celsius to Fahrenheit
    const temp2 = () => {
        const cv = document.getElementById('t1').value;
        let newf = (cv * 9 / 5) + 32;
        document.getElementById('t2').value = newf;
    }