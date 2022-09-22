import Request from "../helper/request"

const request = new Request()

const listAml = async (identityStatusId, isGWMonitored) => {
    return await request.postRequest(`/admin/customers/aml-list/`, {
        identityStatusId: identityStatusId,
        isGWMonitored:isGWMonitored
    })
}

const customerAmlService = {
    listAml
}

export default customerAmlService
