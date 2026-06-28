'use client';

import ChatScreen from "../../../components/chat-screen";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
// Sidebar import kiya (Apne folder structure ke hissab se path check kar lein)
import { FarmerSidebar } from "../../../components/FarmerSidebar"; 

export default function FarmerMessagesRoute() {
  // Creating a dummy shadow handler function to bypass v0 prop requirement crash
  const handleDummySendMessage = (text: string) => {
    console.log("Message action triggered:", text);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col justify-between">
      <div>
        <Navbar />
        
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Flex container for Sidebar and Chat Content */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Sidebar Section */}
            <div className="lg:w-64 flex-shrink-0">
              <FarmerSidebar />
            </div>

            {/* Chat Screen Section */}
            <div className="flex-1 bg-white rounded-3xl p-4 shadow-sm min-h-[600px]">
              {/* Passing the missing onSendMessage prop to stop the runtime error */}
              <ChatScreen onSendMessage={handleDummySendMessage} />
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}