import { Alignment } from '@ckeditor/ckeditor5-alignment'
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles'
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line'
import { Indent } from '@ckeditor/ckeditor5-indent'
import { Link } from '@ckeditor/ckeditor5-link'
import { List } from '@ckeditor/ckeditor5-list'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'
import { Table } from '@ckeditor/ckeditor5-table'
import { WordCount } from '@ckeditor/ckeditor5-word-count'
import { Essentials } from '@ckeditor/ckeditor5-essentials'

const plugins = [
  Heading,
  Paragraph,
  Essentials,
  Bold,
  Italic,
  RemoveFormat,
  List,
  Indent,
  Underline,
  Alignment,
  Strikethrough,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  Link,
  Table,
  WordCount,
  HorizontalLine
]

const toolbar = {
  items: [
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    'fontSize',
    'fontFamily',
    'fontColor',
    'fontBackgroundColor',
    '|',
    'alignment',
    '|',
    'bulletedList',
    'numberedList',
    '|',
    'outdent',
    'indent',
    '|',
    'link',
    '|',
    'insertTable',
    '|',
    'horizontalLine',
    '|',
    'removeFormat',
    '|',
    'undo',
    'redo'
  ]
}

export default {
  plugins,
  toolbar
}
