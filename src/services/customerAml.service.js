import Request from "../helper/request"

const request = new Request()

const listAml = async (identityStatusId, isgwMonitored) => {
    return await request.postRequest(`/admin/customers/aml-list/`, {
        identityStatusId: identityStatusId,
        isgwMonitored:isgwMonitored
    })
}

const customerAmlService = {
    listAml
}

export default customerAmlService
