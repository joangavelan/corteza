import { ComponentMeta, ComponentStory } from '@storybook/react'
import SearchBar from '@components/SearchBar'

export default {
  title: 'UI/SearchBar',
  component: SearchBar
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />

export const Default = Template.bind({})
Default.args = {}
