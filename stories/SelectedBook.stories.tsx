import { ComponentMeta, ComponentStory } from '@storybook/react'
import SelectedBook from '../components/SelectedBook'

export default {
  title: 'UI/SelectedBook',
  component: SelectedBook
} as ComponentMeta<typeof SelectedBook>

const Template: ComponentStory<typeof SelectedBook> = (args) => (
  <SelectedBook {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Biology of Sport: Reports',
  author: 'Sara Johnson, Jodene Lynn Smith, and Paula Sorrell'
}

export const FullTitle = Template.bind({})
FullTitle.args = {
  title:
    'Biology of Sport: Reports of methodological and experimental work on science of sport',
  author: 'Sara Johnson, Jodene Lynn Smith, and Paula Sorrell'
}

export const NoEllipsis = Template.bind({})
NoEllipsis.args = {
  title: 'Biology of Sport',
  author: 'Sara Johnson'
}
