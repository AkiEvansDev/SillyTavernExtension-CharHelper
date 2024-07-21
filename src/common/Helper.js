class Helper {
    static titleCase(str) {
        str = str.trim().replaceAll('-', ' ');
        return this.titleCaseWithChar(str, ' ');
    }

    static titleCaseWithChar(str, char) {
        let splitStr = str.split(char);

        for (let i = 0; i < splitStr.length; ++i) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        return splitStr.join(char);
    }

    static keyCase(str) {
        return str.trim().toLowerCase().replaceAll(' ', '-');
    }

    static smartSplit(str, char) {
        return str.split(char).map(x => x.trim());
    }

    static buildResult(data) {
        let template = data['template'];

        data['steps'].forEach((stepData) => {
            template = template.replace(stepData.step['template'], Helper.clearResult(stepData.getResult(), data['separator']));
        });

        return template;
    }

    static clearResult(str, separator) {
        let patterns = [
            { pattern: '  ', replace: ' ' },
            { pattern: ': ' + separator, replace: ':' },
            { pattern: ':' + separator, replace: ':' },
            { pattern: separator + ' ' + separator, replace: separator },
            { pattern: separator + ' ;', replace: ';' },
            { pattern: separator + ';', replace: ';' },
            { pattern: ' ;', replace: ';' },
        ];
        let run = true;

        while (run === true) {
            run = false;
            patterns.forEach((p) => {
                str = str.replaceAll(p['pattern'], p['replace']);
            });
            patterns.forEach((p) => {
                if (str.includes(p['pattern']))
                    run = true;
            });
        }

        return str.trim();
    }
}

export default Helper;
