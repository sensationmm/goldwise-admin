import Request from "../helper/request"

const request = new Request()

const listAml = async (identityStatusId, isGWMonitored, search) => {
    const path = process.env.REACT_APP_API_ENDPOINT + '/admin/customers/aml-list/'

    return await request.postRequest(path, {
        identityStatusId: identityStatusId,
        isGWMonitored:isGWMonitored,
        search: [{"name": search}, {"emailAddress": search}, {"contactNumber": search}]
    })
}

const customerAmlService = {
    listAml
}

export default customerAmlService
