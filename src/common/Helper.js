class Helper {
    static titleCase(str) {
        str = str.trim().replace('-', ' ');
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
        return str.trim().toLowerCase().replace(' ', '-');
    }

    static smartSplit(str, char) {
        return str.split(char).map(x => x.trim());
    }
}

export default Helper;
