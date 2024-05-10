import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-5">
      {children}
      <div className="flex justify-center">
        <Pagination
          total={10}
          className="fixed bottom-3 "
          variant="bordered"
          initialPage={1}
        />
      </div>
    </div>
  );
}
