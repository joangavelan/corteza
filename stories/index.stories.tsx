import Home from '../pages/index';
import { ComponentStory } from '@storybook/react'

export default {
  title: 'UI',
}

export const HomePage: ComponentStory<typeof Home> = (args) => <Home {...args} />