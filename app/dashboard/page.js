import { Button } from '@/components/ui/button'
import createStore from '@/lib/actions/createStore'
import React from 'react'

function DashBoardPage() {
  return (
    <div className='w-full flex justify-center items-center'>
      <form action={createStore}>
        <div>
          <p>Store name:</p>
          <input type='text' name='storeName'/>
        </div>
        <div>
          <p>subdomain:</p>
          <input type='text' name='subDomain'/>
        </div>
        <div>
          <Button>Add product</Button>
        </div>
        <div>
          <p>Add logo:</p>
          <input type='file' name='logoFile'/>
        </div>
        <div>
          <p>Select templates</p>
          <div>

          </div>
        </div>
        <div>
          <button type='submit'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default DashBoardPage
