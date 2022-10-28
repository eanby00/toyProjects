import './Display.css'

function Display() {
    return (
        <div className='display'>
            <hr />
            <h1>Display 실험</h1>
            <div className="none">none</div>
            <div className="block">block</div>
            <div className="inline">inline</div>
            <div className="inline-block">inline-block</div>
            <div className="flex_container">
                <div>여기는</div>
                <div>flex</div>
                <div>container안</div>
                <div>입니다.</div>
            </div>
            <hr />
        </div>
    )
}

export default Display;