import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'


const blogs = () => {
    return (
        <BaseLayout>
            <BasePage className='about-page'>
                <h1 style={{ textAlign: 'center', color: 'black' }}>Blogs</h1>
                <hr></hr>
            </BasePage>
        </BaseLayout>
    )
}

export default blogs