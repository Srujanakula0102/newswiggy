const Shimmer =()=>{
    const list=[];
    for(i=0;i<13;i++){
        list.push(
            <div key={i} className="shimmercard">
             
            </div>
        );
    }
    return <div className="contaninershimmer">
        {list}
    </div>
}
export default Shimmer