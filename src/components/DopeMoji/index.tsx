const dopeMojis = ['🤹‍', '🤯', '😐', '😫', '😛', '😩', '🤓', '👺', '🧶', '🧵', '🍪', '🚀', '🎡', '🏝', '🏜', '🏕', '🧬']
const getRandomIdx = (arrLen: number): number => Math.floor(Math.random() * arrLen)
const getDopeMoji = (): string => dopeMojis[getRandomIdx(dopeMojis.length)]

export default getDopeMoji
