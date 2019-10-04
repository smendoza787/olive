import React from 'react'
import styled from 'styled-components'

// prettier-ignore
const dopeMojis = [
  '🤹‍', '🤯', '😐', '😫', '😛', '😩', '🤓', '👺', '🧶', '🧵', '🍪', '🚀', '🎡', '🏝', '🏜', '🏕', '🧬', '🎢', '🦀',
  '🦊', '🦝', '🐻', '🐼', '🦘', '🦡', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔',
  '🐧', '🐶', '🐱', '🐭', '🐹', '🐰', '🐦', '🐤', '🐣', '🐥', '🦆', '🦢', '🦅', '🦉', '🦚', '🦜', '🦇', '🐺', '🐗',
  '🐛', '🐴', '🦄', '🐝', '🦋', '🐌', '🐚', '🐞', '🦗', '🕷', '🕸', '🦂', '🦠', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙',
  '🦑', '🦐', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🐘', '🦏', '🦛', '🐪',
  '🐖', '🐫', '🦙', '🦒', '🐃', '🐂', '🐄', '🐎', '🐏', '🐑', '🐐', '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇',
  '🐉', '🐁', '🐀', '🐿', '🦔', '🐾', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '🍀', '🎍', '🎋', '🍃', '🍂',
  '💐', '🍁', '🍄', '🌾', '🌷', '🌹', '🥀', '🌺', '🌸', '🌼', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗',
  '🌒', '🌘', '🌑', '🌓', '🌔', '🌙', '🌎', '🌍', '🌏', '💫', '🌟', '✨', '💥', '🔥', '🌪', '🌈', '🌤', '🌥', '🌦',
  '💨', '🌧', '⛈', '🌩', '🌨', '💧', '💦', '🌊', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '🍏', '🍎',
  '🍋', '🍐', '🍊', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥭', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥒',
  '🌶', '🥬', '🌽', '🥕', '🥔', '🍠', '🥐', '🍞', '🥖', '🥨', '🥯', '🧀', '🥚', '🍳', '🥞', '🥓', '🥩', '🍗', '🍖',
  '🌮', '🌭', '🍔', '🍟', '🍕', '🥪', '🥙', '🌯', '🥗', '🥘', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🍤',
  '🍙', '🍚', '🍘', '🍥', '🥮', '🥠', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿',
  '🌰', '🧂', '🍩', '🍪', '🥜', '🍯', '🥛', '🍼', '🍵', '🥤', '🌋', '⛰', '🏔', '🗻', '🎊', '🎉', '🧨', '🧱', '🔮',
]
const getRandomIdx = (arrLen: number): number => Math.floor(Math.random() * arrLen)

const EmojiSizeWrapper = styled.span<{ size: 'lg' | 'md' | 'sm' }>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '1rem'
      case 'md':
        return '2.5rem'
      case 'lg':
        return '3.5rem'
      default:
        return '2rem'
    }
  }};
`

interface DopeMojiProps {
  size?: 'sm' | 'md' | 'lg'
}

const DopeMoji = ({ size = 'md' }: DopeMojiProps) => (
  <EmojiSizeWrapper size={size}>{dopeMojis[getRandomIdx(dopeMojis.length)]}</EmojiSizeWrapper>
)

export default DopeMoji
