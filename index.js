const collection = (input) => {
    const arr = [...input];
    return {
        runningTotal: function () { return arr.reduce((a, b) => [...a, (a.pop() || 0) + b], []) },
        push: function (item) {
            return arr.push(item)
        },
        data: function () { return arr },
        avg: function () { return arr.reduce((a, b) => a + b, 0) / arr.length },
        sum: function () { return arr.reduce((a, b) => a + b, 0) },
        min: function () { return Math.min(...arr) },
        max: function () { return Math.max(...arr) },
        even: function () {
            return arr.filter(f => f % 2 === 0)
        },
        odd: function () {
            return arr.filter(f => f % 2 !== 0)
        },
        unique: function () { return Array.from(new Set([...arr])) },
        moveToFirst: function (fn) {
            return arr.reduce((a, b) => fn(b) ? [[...a[0], b], [...a[1]]] : [[...a[0]], [...a[1], b]], [[], []]).flat()
        },
        secondMax: function () {
            return arr.reduce((a, b) => b > a.t ? { t: b, s: a.t > a.s ? a.t : a.s } : b > a.s && b !== a.t ? { t: a.t, s: b } : { ...a }, { t: -Number.MAX_VALUE, s: -Number.MAX_VALUE }).s
        },
        secondMin: function () {
            return arr.reduce((a, b) => b < a.t ? { t: b, s: a.t < a.s ? a.t : a.s } : b < a.s && b !== a.t ? { t: a.t, s: b } : { ...a }, { t: Number.MAX_VALUE, s: Number.MAX_VALUE }).s
        },
        asc: function () {
            return [...arr].sort((a, b) => a - b)
        },
        desc: function () {
            return [...arr].sort((a, b) => b - a)
        },
        merge: function (input) {
            if (Array.isArray(input)) {
                return arr.push(...input)
            } else {
                throw new Error('input is not an array')
            }
        },
        shuffle: function () {
            return [...arr].sort(() => Math.random() - 0.5)
        },
        duplicate: function () {
            return Array.from(new Set(arr.reduce((a, b, i, arr) => arr.indexOf(b) !== i ? [...a, b] : [...a], [])))
        },
        replaceAllWith: function (fn, r = 0) {
            return arr.reduce((a, b) => fn(b) ? [...a, r] : [...a, b], [])
        },
        groupBy: function (fn) {
            return arr.reduce((a, b) => fn(b) ? { yes: [...a.yes, b], no: a.no } : { yes: a.yes, no: [...a.no, b] }, { yes: [], no: [] })
        }
    }
}
module.exports = collection

