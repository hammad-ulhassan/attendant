export interface IAttendanceData{
    id: React.Key;
    date: Date;
    status: 'present' | 'absent' | 'onleave';
    inTime: Date;
    outTime: Date;
    totalHours: number;
};