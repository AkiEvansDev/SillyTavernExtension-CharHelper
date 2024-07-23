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
            let result = Helper.clearResult(stepData.getResult(), data['separator']);

            if (result === 'no' || result === 'no;') {
                let index = -1;
                let drop = -1;

                this.smartSplit(template, '\n').forEach(function (line) {
                    index++;
                    if (line.includes(stepData.step['template'])) {
                        drop = index;
                    }
                });

                if (drop > -1) {
                    let lines = template.split('\n');
                    lines.splice(drop, 1);
                    template = lines.join('\n');
                }
            } else {
                template = template.replace(stepData.step['template'], result);
            }
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
