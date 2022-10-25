import Header from '../../../components/molecules/Header'
import Sidebar from '../../../components/molecules/Sidebar'
import SpreadHours from '../../../components/organisms/SpreadHours'
import Button from '../../../components/atoms/Button';

const Products = () => {
    return (
        <div>
            {/* TODO: add template */}
            <Header />
            <div className="flex h-full">
                <Sidebar />
                <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
                    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 transition-all duration-500 ease-in-out">
                        <div className="h-full">
                            <div className="w-full mx-auto rounded-sm border-gray-200">
                                <div className="flex">
                                    <div className="w-full md:w-1/2 px-2">
                                        <SpreadHours
                                            title="Normal Hours"
                                            type="fixed"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <SpreadHours
                                            title="Extended Hours"
                                            type="fixed"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end pt-12 mt-12">
                                <Button style={{ width: '200px', marginRight: '16px' }}>Cancel</Button>
                                <Button style={{ width: '200px', backgroundColor: 'rgb(69, 179, 182)', color: 'white' }}>Save</Button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div >
    )
}

export default Products
