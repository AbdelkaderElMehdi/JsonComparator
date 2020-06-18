let firstDataSource = [{
    "_id": "5ee76758c17ffa8962925e99",
    "index": 0,
    "guid": "4e31192a-6749-4878-9613-8897ecc34df3",
    "age": 30,
    "name": "Dennis Alvarez",
    "gender": "male",
    "email": "dennisalvarez@miraclis.com",
    "phone": "+1 (821) 576-3098"
},
{
    "_id": "5ee76758e01968c455c8d138",
    "index": 1,
    "guid": "35d8b678-b1bf-4e6f-be8d-acc9bdd78f56",
    "age": 25,
    "name": "Cabrera Coleman",
    "gender": "male",
    "email": "cabreracoleman@miraclis.com",
    "phone": "+1 (843) 532-3090"
},
{
    "_id": "5ee76758f95db70d1e054210",
    "index": 2,
    "guid": "a4f65902-694c-47fa-9647-7edbac0f9565",
    "age": 25,
    "name": "Estrada Castro",
    "gender": "male",
    "email": "estradacastro@miraclis.com",
    "phone": "+1 (854) 461-2432"
},
{
    "_id": "5ee76758bec0c8e3bbdf5377",
    "index": 3,
    "guid": "a05b3e0e-491a-4792-9cae-38f85d2fd083",
    "age": 40,
    "name": "Mayra Barlow",
    "gender": "female",
    "email": "mayrabarlow@miraclis.com",
    "phone": "+1 (800) 407-3383"
},
{
    "_id": "5ee767587baaf6612c95c5fd",
    "index": 4,
    "guid": "88a6ba07-cb6c-43f4-8b23-84f17a670b00",
    "age": 27,
    "nationality": "algerian",
    "name": "Dejesus Phillips",
    "gender": "male",
    "email": "dejesusphillips@miraclis.com",
    "phone": "+1 (940) 456-3130"
},
{
    "_id": "5ee76758b5e9ff31e7d405f8",
    "index": 5,
    "guid": "92b04297-aafa-4462-8ff4-7ddc5176ee70",
    "age": 32,
    "name": "Flynn Cruz",
    "gender": "male",
    "email": "flynncruz@miraclis.com",
    "phone": "+1 (865) 543-3177"
},
{
    "_id": "5ee7675840bd1b0b09464811",
    "index": 6,
    "guid": "9db42dc7-23f2-48fd-a8f8-878b56dcfad2",
    "age": 30,
    "name": "Duke Stephens",
    "gender": "male",
    "email": "dukestephens@miraclis.com",
    "phone": "+1 (870) 520-2339"
}
]

let secondDataSource = [{
    "_id": "5ee76758c17ffa8962925e99",
    "index": 0,
    "phone": "+1 (821) 576-3098",
    "name": "Dennis Alvarez",
    "guid": "4e31192a-6749-4878-9613-8897ecc34df3",
    "age": 30,
    "gender": "male",
    "email": "dennisalvarez@miraclis.com",
},
{
    "_id": "5ee76758e01968c455c8d138",
    "index": 1,
    "guid": "35d8b678-b1bf-4e6f-be8d-acc9bdd78f56",
    "age": 25,
    "name": "Cabrera Coleman",
    "gender": "male",
    "email": "cabreracoleman@miraclis.com",
    "phone": "+1 (843) 532-3090"
},
{
    "_id": "5ee76758f95db70d1e054210",
    "index": 2,
    "guid": "a4f65902-694c-47fa-9647-7edbac0f9565",
    "age": 25,
    "name": "Estrada Castro",
    "gender": "male",
    "email": "estradacastro@miraclis.com",
    "phone": "+1 (854) 461-2432"
},
{
    "_id": "5ee76758bec0c8e3bbdf5377",
    "index": 3,
    "guid": "a05b3e0e-491a-4792-9cae-38f85d2fd083",
    "age": 40,
    "name": "Mayra Barlow",
    "gender": "female",
    "email": "mayrabarlow@miraclis.com",
    "phone": "+1 (800) 407-3383"
},
{
    "_id": "5ee767587baaf6612c95c5fd",
    "index": 4,
    //"nationality": "algerian",
    "guid": "88a6ba07-cb6c-43f4-8b23-84f17a670b00",
    "age": 27,
    "name": "Dejesus Phillips",
    "gender": "male",
    "email": "dejesusphillips@miraclis.com",
    "phone": "+1 (940) 456-3130",
},
{
    "_id": "5ee76758b5e9ff31e7d405f8",
    "index": 5,
    "guid": "92b04297-aafa-4462-8ff4-7ddc5176ee70",
    "age": 32,
    "name": "Flynn Cruz",
    "gender": "male",
    "email": "flynncruz@miraclis.com",
    "phone": "+1 (865) 543-3177"
},
{
    "_id": "5ee7675840bd1b0b09464811",
    "index": 6,
    "guid": "9db42dc7-23f2-48fd-a8f8-878b56dcfad2",
    "age": 30,
    "language": "french",
    "name": "Duke Stephens",
    "gender": "male",
    "email": "dukestephens@miraclis.com",
    "phone": "+1 (870) 520-2339",

}
]

let options = [{
    "v1": "_id",
    "v2": "_id",
    "required": true,
    "enabled": true,
},
{
    "v1": "name",
    "v2": "name",
    "required": true,
    "enabled": true,
},
{
    "v1": "email",
    "v2": "email",
    "required": true,
    "enabled": true,
},
{
    "v1": "nationality",
    "v2": "nationality",
    "required": true,
    "enabled": false
},
{
    "v1": "blank",
    "v2": "nationality",
    "required": false,
    "enabled": false
}
]

const getFieldList = (itemList) => {
    let availableFields = new Set()
    for (let item of itemList) {
        for (let field in item) {
            availableFields.add(field)
        }
    }
    return [...availableFields]
}

const getCommonFields = (fieldList1, fieldList2) => {
    return fieldList1.filter(x => fieldList2.includes(x))
}

const getSortedFieldLists = (commonFields, fieldList1, fieldList2) => {
    return {
        firstFieldList: [...commonFields, ...fieldList1.filter(x => !commonFields.includes(x))],
        secondFieldList: [...commonFields, ...fieldList2.filter(x => !commonFields.includes(x))]
    }
}

const getSelectableParams = (dataSourceV1, dataSourceV2) => {
    let availableFieldsV1 = getFieldList(dataSourceV1)
    let availableFieldsV2 = getFieldList(dataSourceV2)
    let commonFields = getCommonFields(availableFieldsV1, availableFieldsV2)
    return getSortedFieldLists(commonFields, availableFieldsV1, availableFieldsV2)
}

const compareDataSources = (firstDataSource, secondDataSource, options) => {
    let selectedFields = options.filter(x => x.enabled == true)
    let rapport = {
        ok: 0,
        error: 0,
        noMatchItems: Array()
    }
    let found
    let foundItem
    for (let item of firstDataSource) {
        for (let item2 of secondDataSource) {
            found = true;
            foundItem = null
            for (let field of selectedFields) {
                if (item[field.v1] == item2[field.v2]) {
                    continue
                } else {
                    found = false
                    break
                }
            }
            if (found) {
                foundItem = item2
                break
            }
        }
        if (found) {
            rapport.ok++
            secondDataSource = secondDataSource.filter(x => x != foundItem)
        } else {
            rapport.error++;
            rapport.noMatchItems.push(item)
        }
    }
    return rapport
}

const checkRequiredFields = (dataSource, options, version) => {
    let rapport = {
        version: version,
        ok: 0,
        error: 0,
        missingFieldItems: Array()
    }
    selectedFields = options.filter(x => x.required == true)
    for (item of dataSource) {
        let error = false
        let missingFields = []
        for (field of selectedFields) {

            if (item[field[version]] === undefined) {
                error = true
                missingFields.push(field[version]);
                console.log(field[version])
            }
        }
        if (error) {
            rapport.error++
            rapport.missingFieldItems.push(
                {
                    ...item,
                    "missingFields": missingFields
                })
        }
        else {
            rapport.ok++
        }
    }
    return rapport
}

const globalCheck = (dataSourceV1, dataSourceV2, options) => {
    return {
        v1: checkRequiredFields(dataSourceV1, options, "v1"),
        v2: checkRequiredFields(dataSourceV2, options, "v2"),
        comparaison: compareDataSources(dataSourceV1, dataSourceV2, options)
    }
}

let res = globalCheck(firstDataSource, secondDataSource, options)

console.log(JSON.stringify(res, null, 4))
