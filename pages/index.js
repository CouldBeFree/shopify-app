import { EmptyState, Layout, Page } from '@shopfify/polaris'

function Index() {
    return (
        <Page>
            <Layout>
                <EmptyState>
                    <p>Select Products</p>
                </EmptyState>
            </Layout>
        </Page>
    )
}

export default Index;