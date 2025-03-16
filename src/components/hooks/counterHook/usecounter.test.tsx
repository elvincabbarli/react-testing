import { renderHook, act } from "@testing-library/react";
import { UseCounter } from "./useCounter";

describe("UseCounter custom hook", () => {
  test("should initialize with default count", () => {
    const { result } = renderHook(() => UseCounter({ initialCount: 0 }));

    expect(result.current.count).toBe(0);
  });

  test("should initialize with a custom count", () => {
    const { result } = renderHook(() => UseCounter({ initialCount: 5 }));

    expect(result.current.count).toBe(5);
  });

  test("should increment count", () => {
    const { result } = renderHook(() => UseCounter({ initialCount: 0 }));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test("should decrement count", () => {
    const { result } = renderHook(() => UseCounter({ initialCount: 5 }));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(4);
  });

  test("should reset count to initial value", () => {
    const { result } = renderHook(() => UseCounter({ initialCount: 10 }));

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });
});
