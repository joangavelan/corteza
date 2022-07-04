import { ComponentMeta, ComponentStory } from '@storybook/react'
import Heading from '@components/Heading'

export default {
  title: 'UI/Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Search = Template.bind({})
Search.args = {
  variant: 'search',
  title: "Search For A Book You'd like to Read And Track"
}

export const Modal = Template.bind({})
Modal.args = {
  variant: 'modal',
  title: 'Missing fields...',
  description:
    'Unfortunately, we were unable to collect all the required data for the book you chose, please fill in as many fields as you can for better tracking.'
}
