import{
    Paper ,
    Table , TableCell , TableRow,TableHead ,TableContainer , Box,Card , TableBody, Rating, Avatar

} from '@mui/material'
const OrderedCourse = (props) => {
                        
    
    return <TableContainer component={Paper} sx={{
        width:'90%',
        margin:'0 auto',
        background:"#FFF7DF",
    }} >
        <Table aria-label='course list table'>

            <TableBody>

            {/* table header */}

    <TableRow >
<TableCell>Course Details</TableCell>
<TableCell align='center' >Category</TableCell>
<TableCell>Type</TableCell>
<TableCell>Teacher</TableCell>
<TableCell align='center'>Rating</TableCell>
<TableCell>Status</TableCell>
<TableCell>Date</TableCell>
</TableRow>
 </TableBody>
 <TableBody>
        {props.tableData.map((eachContent,index ,array)=>{
            return<TableRow key={index}>
            <TableCell>
                <Avatar src={eachContent.image}>
                </Avatar>
                    {eachContent.courseTitle}
            </TableCell>
            <TableCell align='center' >{eachContent.category}</TableCell>
            <TableCell>{eachContent.type}</TableCell>
            <TableCell>{eachContent.teacher}</TableCell>
            <TableCell><Rating precision={0.5} value={Math.floor(5 * Math.random()) || 2 } /></TableCell>
            <TableCell sx={{color: eachContent.status === 'Successful' ? 'green' : 'red' }} >{eachContent.status}</TableCell>
            <TableCell>{eachContent.date}</TableCell>
            <TableCell></TableCell>

            
            </TableRow>
        })}

 </TableBody>
            
        </Table>
               



        
    </TableContainer>;
}
 
export default OrderedCourse;

