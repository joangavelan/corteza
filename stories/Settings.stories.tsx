import { ComponentMeta, ComponentStory } from '@storybook/react'
import Settings from '@components/Settings'

export default {
  title: 'UI/Settings',
  component: Settings
} as ComponentMeta<typeof Settings>

const Template: ComponentStory<typeof Settings> = () => <Settings />

export const Default = Template.bind({})
Default.args = {}
