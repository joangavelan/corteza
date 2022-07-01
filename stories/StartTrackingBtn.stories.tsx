import { ComponentMeta, ComponentStory } from '@storybook/react'
import StartTrackingBtn from '../components/StartTrackingBtn'

export default {
  title: 'UI/StartTrackingBtn',
  component: StartTrackingBtn
} as ComponentMeta<typeof StartTrackingBtn>

const Template: ComponentStory<typeof StartTrackingBtn> = (args) => (
  <StartTrackingBtn {...args} />
)

export const Default = Template.bind({})
Default.args = {}
