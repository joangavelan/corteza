import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AiFillCaretRight } from 'react-icons/ai'
import Button from '../components/Button'

export default {
  title: 'UI/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Start Tracking',
  type: 'button',
  Icon: AiFillCaretRight
}
