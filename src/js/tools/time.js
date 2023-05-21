// Import 


export const ConverTime = (Value) => {
    
    const TimeEnd = new Date(Value);
    const formatted = TimeEnd.toLocaleString('nb-no', {
        year:'numeric', 
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit', 
        minute: "2-digit",
        hour12: true,
    });

    return formatted
}