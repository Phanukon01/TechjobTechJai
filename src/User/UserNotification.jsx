


const UserNotification = () => {
    const goBack = () => {
        window.history.back()
    }
    return(
        <div>
            <button onClick={goBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                ⬅️ ย้อนกลับ
            </button>
            <h1 className="p-4">Notification</h1>
        </div>
    )
}
export default UserNotification