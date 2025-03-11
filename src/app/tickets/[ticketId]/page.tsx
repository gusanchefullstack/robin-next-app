import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
    if(!ticket){
        return <div>Ticket not found</div>
    } 
    return (
        <div>
            <h2 className="text-lg font-bold mb-2">{ticket.title}</h2>
            <p className="text-indigo-700 mb-4">{ticket.content}</p>
            <p className="text-green-500 mb-4">{ticket.status}</p>
        </div>
    )
 

};

export default TicketPage;
