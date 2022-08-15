import React from 'react'
import { Stack } from 'react-bootstrap'
import Health from './awards/Health'
import Gold from './awards/Gold'

import "./ChapterItem.scss"
function ChapterItem() {
  return (
    <Stack gap={5}>
      <div className="chapter-item bg-light border">
        <div className='chapter-item__text'>
            <p>Делимость натуральных чисел</p>
            <div>
                <Health/>
                <Gold/>
            </div>
        </div>
        <div className="chapter-item__progress">

        </div>
      </div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
  )
}

export default ChapterItem