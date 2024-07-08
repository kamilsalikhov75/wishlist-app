import clsx from "clsx";

interface WithTitleProps {
  title: React.ReactNode;
  children: React.ReactNode;
  titleRightContent?: React.ReactNode;
  classNames?: {
    wrapper?: string;
    titleWrapper?: string;
    title?: string;
    content?: string;
  };
}
export const WithTitle = ({
  title,
  children,
  classNames,
  titleRightContent,
}: WithTitleProps) => {
  return (
    <div
      className={clsx("flex flex-col gap-3 items-start", classNames?.wrapper)}
    >
      <div
        className={clsx(
          "w-full flex justify-between items-center",
          classNames?.titleWrapper
        )}
      >
        <h2 className={clsx("font-bold text-xl", classNames?.title)}>
          {title}
        </h2>
        {titleRightContent}
      </div>
      <div className={clsx("w-full", classNames?.content)}>{children}</div>
    </div>
  );
};
