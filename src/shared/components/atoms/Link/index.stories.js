import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="https://github.com/diegohaz/arc">Test Link</Link>
  ))
  .add('reverse', () => (
    <Link href="https://github.com/diegohaz/arc" reverse>Test Link</Link>
  ))
	.add('palette secondary', () => (
    <Link href="https://github.com/diegohaz/arc" palette="secondary">Test Link</Link>
  ))
