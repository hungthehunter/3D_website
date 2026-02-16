import React, { useState } from 'react'

type orderStatus=
  'pending' |
  'delivered' |
  'completed' |
  'canceled'


type order = {
  name: string,
  total: number,
  items: any[],
  status: orderStatus
}

type orderHaveId = {
  id: number,
  name: string,
  total: number,
  items: any[],
  status: orderStatus
}

type setting = {
  theme: string,
  debug: boolean,
}

const mockData: order[] = [
  {name: "Quốc Hưng",total: 2,status: 'pending', items: ['laptop', 'keyboard'] },
  {name: "Quang Vinh",total: 2,status: 'completed', items: ['laptop', 'keyboard'] },
  {name: "Thái Khôi",total: 1,status: 'canceled', items: ['laptop'] },
  {name: "Tú Vương",total: 3,status: 'canceled', items: ['laptop', 'keyboard', 'screen'] },
  {name: "Thiên Phúc",total: 1,status: 'pending', items: ['keyboard'] }
]

const mockDataHaveId: orderHaveId[] = [
  {id: 1, name: "Quốc Hưng",total: 2,status: 'pending', items: ['laptop', 'keyboard'] },
  {id: 2, name: "Quang Vinh",total: 2,status: 'completed', items: ['laptop', 'keyboard'] },
  {id: 3,name: "Thái Khôi",total: 1,status: 'canceled', items: ['laptop'] },
  {id: 4,name: "Tú Vương",total: 3,status: 'canceled', items: ['laptop', 'keyboard', 'screen'] },
  {id: 5,name: "Thiên Phúc",total: 1,status: 'pending', items: ['keyboard'] }
]


const updateSetting: setting = { theme: "light", debug: true }
function PracticeArrayMethods() {

  /*
  Bài 1: Lọc đơn hàng (Filter)

  Yêu cầu: Tạo một mảng mới tên completedOrders chỉ chứa các đơn hàng có status là "completed".

  Ứng dụng: Chức năng "Lịch sử mua hàng" hoặc Tab "Đã giao".


  *học được*
  phân biệt map -> biến đổi từng phần tử thành cái mới
            filter -> lọc dữ liệu và trả về mảng mới
  */

 const completedOrders = mockData
  .filter(data => data.status === 'completed')
  .map(data => data)

  /*
  Bài 2: Tạo danh sách hiển thị (Map)

  Yêu cầu: Từ mảng orders, tạo ra một mảng mới chỉ chứa tên người dùng và mã đơn hàng.

  Output mong muốn: [{ id: 1, user: "Nguyen Van A" }, { id: 2, user: "Tran Thi B" }, ...]

  Ứng dụng: API trả về quá nhiều dữ liệu thừa, Frontend chỉ cần lấy vài trường để hiện lên bảng (Table).

  *học được*
  filter -> dùng để lọc dữ liệu và trả lại mảng mới
  map -> biến đổi các phần tử
  map + spread -> sửa field như 1 dạng override hoặc thêm trường như index vào
  */

 const orderTable = mockData
  .map((data,index) => ({
    ...data,
    "index": index
  })
  )

  /*
  
  Bài 3: Tìm kiếm (Find)

  Yêu cầu: Tìm đơn hàng đầu tiên có total lớn hơn 5.

  Ứng dụng: Tìm thông tin chi tiết khi người dùng click vào một item.

  *học được*
  find -> tra ve 1 du lieu duy nhat
  */
  const orderSearch = mockData.find((data) => data.total > 1)


  /*
  
  Bài 4: Tính tổng doanh thu (Reduce)

  Yêu cầu: Tính tổng số tiền (total) của tất cả các đơn hàng trong danh sách.

  Ứng dụng: Hiển thị "Tổng doanh thu" trên Dashboard Admin.

  reduce(callbackFn, initial value)
  */
  const initialValue = 0;
  function totalVenue(array: number[]):number{
    let result =array.reduce((total,currentNumber) => total + currentNumber,initialValue );
    return result
  }

  /*
  
  Bài 5: Thống kê (Reduce nâng cao - Khó)

  Yêu cầu: Tạo một object đếm số lượng đơn hàng theo trạng thái.

  Output mong muốn: { completed: 3, pending: 1, cancelled: 1 }

  Gợi ý: Khởi tạo giá trị ban đầu của reduce là {}.
  */

  

  function totalStatus(completeArray: order[]): Record<string, number>{
  let initialStatus = completeArray.reduce((acc,currentOrder) => {
    if(currentOrder.status === 'pending'){
      acc[currentOrder.status]= (acc[currentOrder.status] | 0) +1;
    }else if(currentOrder.status === 'completed'){
      acc[currentOrder.status] = (acc[currentOrder.status] | 0) + 1;
    }else if(currentOrder.status === 'canceled'){
      acc[currentOrder.status] = (acc[currentOrder.status] | 0) + 1;
    }
    return acc
  },{} as Record<string,number>)
  return initialStatus
  }



  /*
  
  Bài 6: Cập nhật trạng thái (Spread Operator ...)

  Yêu cầu: Giả sử đơn hàng có id: 2 vừa được giao xong. Hãy tạo ra một mảng mới (không sửa mảng cũ), trong đó đơn hàng số 2 có status đổi thành "completed", các đơn hàng khác giữ nguyên.

  Gợi ý: Dùng map kết hợp với ....

  Ứng dụng: Update State trong React khi người dùng bấm nút "Hoàn thành".

  */

  const newStatusArrayModification = mockDataHaveId.map((data) => data.id === 2 ? {...data,status: "completed"} : data)

  /*
  
  Bài 7: Gộp dữ liệu (Spread Object)

  Yêu cầu: Cho object update = { theme: "light", debug: true }. Hãy tạo ra object finalSettings bằng cách gộp settings cũ và update mới (cái mới ghi đè cái cũ).

  Ứng dụng: Chức năng "Lưu cài đặt" của người dùng.

  */
  const [userSetting ,setUserSetting]  = useState({theme: 'black', debug: false})
  const finalSetting = {...userSetting, ...updateSetting}


  /*
  
  Bài 8: Bóc tách dữ liệu (Destructuring)

  Yêu cầu: Viết một function showOrderInfo nhận vào một object order. Bên trong hàm, dùng destructuring để lấy user và total ra in luôn, không dùng dấu chấm (ví dụ order.user).

  Ví dụ gọi: showOrderInfo(orders[0]) -> Console: "User: Nguyen Van A - Total: 500000"
  */

  function showOrderInfo(): order[]{
    const newOrderArray = mockData.map(data => {
      const {name, total, ...rest} = data
      return {name,total,...rest}
    })
    return newOrderArray
  }

  /*
  
  Bài 9: Duyệt Object (Object.entries)

  Yêu cầu: Dùng Object.entries(settings) để in ra các dòng cấu hình theo format: "Key: [tên key] - Value: [giá trị]".

  Ứng dụng: Render danh sách cài đặt động mà không cần biết trước tên key.

  */
  const iterableArray = Object.entries(mockData).map(([key,value]) =>{
    return (
      <li key={key}>
        <div>
          {`Key: ${key}`}
        </div>
        <ul>
            {typeof value === 'object' && value !== null ? (
              Object.entries(value).map(([subKey,subValue]) => (
                <li key={subKey}>{subValue}</li>
              ))
            ): (
              <li>{value}</li>
            )}
        </ul>
      </li>
    )
  })

  /*
  
  Bài 10: Xử lý dữ liệu thiếu (Optional Chaining ?. & Nullish ??)
  Bài 10: Xử lý dữ liệu thiếu (Optional Chaining ?. & Nullish ??)

Đề bài:

const userA = { profile: { avatar: "image.png" } };
const userB = { profile: null }; // Chưa có profile
  */
  const userA = { profile: { avatar: "image.png" } };
  const userB = { profile: null }; 

 const resultUserA = userA.profile?.avatar
 const resultUserB = userB.profile
  const resultUserA1 = userA.profile.avatar ?? {profile: {avatar: "hello.png"}}
  const resultUserB1 = userA.profile.avatar ?? {profile: {avatar: "hello.png"}}


  return (
    <>
    <div>
      <h1>completed orders</h1>
      <ul>
        {completedOrders.map((data,index) =>{
          return(
            <li key={index}>
              <div>{data.name}</div>
              <div>{data.status}</div>
              <div>{data.total}</div>
              <div>{data.items.join(',')}</div>
            </li>
          )
        })}

      </ul>

      <h1>extract orders</h1>
      <ul>
        {orderTable.map((data,index) => {
          return (
            <li key={index}>
              <div>{data.index}---{data.name}</div>
            </li>
          )
        })}
      </ul>

      <h1>{`find order.total > 5`} is {orderSearch ? orderSearch.name : ""}</h1>
      <h1>Total venue: {totalVenue([4,2,21,1])}</h1>

      <h1>total status: </h1>
      <ul>
        { Object.entries(totalStatus(mockData)).map(([data,index],what)=>{
          return(
            <li key={data}>
              {`${data}: ${index}`} 
            </li>
          )
        })} 
      </ul>

      <h1>Status completed order 2</h1>
      <ul>
        { newStatusArrayModification.map((data,index) =>{
          return (
            <li key={index}>
              <div>{data.id}</div>
              <div>{data.name}</div>
              <div>{data.total}</div>
              <div>{data.status}</div>
              <div>{data.items}</div>
              </li>
          )
        })}
      </ul>
      <h1> final setting</h1>
      <div>{finalSetting.theme} ---- {finalSetting.debug}</div>
      <h1>Show infoOrder</h1>
      <ul>
        {showOrderInfo().map((value,index)=>{
          return (
            <li key={index}>{value.name} ---- {value.total}</li>
          )
        })}
      </ul>
      <h1> Iterable object</h1>
      <ul>
        {iterableArray}
      </ul>
      <h1>?? and ?</h1>
      {resultUserA}
      {resultUserB}
      {resultUserA1}
      {resultUserB1}

    </div>
    </>
  )
}

export default PracticeArrayMethods