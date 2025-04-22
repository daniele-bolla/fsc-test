// src/components/FSCMoodlet.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FSCMoodlet } from './FSCMoodlet';

describe('FSCMoodlet Integration', () => {

    it('should render with letter display mode by default', () => {
        render(<FSCMoodlet fcsType="F" />);
        expect(screen.getByText('F')).toBeInTheDocument();
    });

    it('should render with full text when display mode is word', () => {
        render(<FSCMoodlet fcsType="F" displayMode="word" />);
        expect(screen.getByText('FUELLING')).toBeInTheDocument();
    });

    it('should render correct content for each fcsType', () => {
        // Test F type
        const { unmount } = render(<FSCMoodlet fcsType="F" />);
        expect(screen.getByText('F')).toBeInTheDocument();
        unmount();

        // Test S type
        render(<FSCMoodlet fcsType="S" />);
        expect(screen.getByText('S')).toBeInTheDocument();
        unmount();

        // Test C type
        render(<FSCMoodlet fcsType="C" />);
        expect(screen.getByText('C')).toBeInTheDocument();
    });

    it('should render full text for each fcsType in word mode', () => {
        // Test F type
        const { unmount } = render(<FSCMoodlet fcsType="F" displayMode="word" />);
        expect(screen.getByText('FUELLING')).toBeInTheDocument();
        unmount();

        // Test S type
        render(<FSCMoodlet fcsType="S" displayMode="word" />);
        expect(screen.getByText('SERVICING')).toBeInTheDocument();
        unmount();

        // Test C type
        render(<FSCMoodlet fcsType="C" displayMode="word" />);
        expect(screen.getByText('CLEANING')).toBeInTheDocument();
    });

    it('should have inactive variant in required state', () => {
        console.log(123123)
        const { container } = render(<FSCMoodlet fcsType="F" initialState="required" />);
        console.log(container)
        const element = container.querySelector('[class*="bg-purple"]');
        console.log(element)

        expect(element).toBeInTheDocument();
    });

    it('should transition from required to current on click', async () => {
        const { container } = render(<FSCMoodlet fcsType="F" initialState="required" />);

        // Find the button
        const button = screen.getByText('F');

        // Initial state should have inactive variant
        expect(container.querySelector('[class*="bg-purple"]')).toBeInTheDocument();

        // Click to transition to current state
        await userEvent.click(button);

        // Should now have red variant
        expect(container.querySelector('[class*="bg-red"]')).toBeInTheDocument();


    });

    it('should transition from current to completed on click', async () => {
        const { container } = render(<FSCMoodlet fcsType="F" initialState="current" />);

        // Find the button
        const button = screen.getByText('F');

        // Initial state should have red variant
        expect(container.querySelector('[class*="bg-red"]')).toBeInTheDocument();

        // Click to transition to completed state
        await userEvent.click(button);

        // Should now have green variant
        expect(container.querySelector('[class*="bg-green"]')).toBeInTheDocument();
    });

    it('should transition from required to not-required on right click', () => {
        const { container } = render(<FSCMoodlet fcsType="F" initialState="required" />);

        // Find the button
        const button = screen.getByText('F');

        // Initial state should have inactive variant
        expect(container.querySelector('[class*="bg-purple"]')).toBeInTheDocument();

        // Right-click to transition to not-required state
        fireEvent.contextMenu(button);

        // Should now be disabled
        expect(button.closest('button')).toHaveAttribute('disabled');
    });

    it('should complete the full FSC state cycle', async () => {
        const { container } = render(<FSCMoodlet fcsType="F" initialState="required" />);
        const button = screen.getByText('F');

        // Required -> Current (left click)
        await userEvent.click(button);
        expect(container.querySelector('[class*="bg-red"]')).toBeInTheDocument();

        // Current -> Completed (left click)
        await userEvent.click(button);
        expect(container.querySelector('[class*="bg-green"]')).toBeInTheDocument();

        // Completed -> Required (right click)
        fireEvent.contextMenu(button);
        expect(container.querySelector('[class*="bg-purple"]')).toBeInTheDocument();

        // Required -> Not-Required (right click)
        fireEvent.contextMenu(button);
        expect(button.closest('button')).toHaveAttribute('disabled');

        // Not-Required -> Required (right click)
        fireEvent.contextMenu(button);
        expect(container.querySelector('[class*="bg-purple-light"]')).toBeInTheDocument();
        expect(button.closest('button')).not.toHaveAttribute('disabled');
    });

    it('should pass additional props to MoodletButton', () => {
        render(<FSCMoodlet fcsType="F" data-testid="test-moodlet" aria-label="Test Label" />);

        const button = screen.getByTestId('test-moodlet');
        expect(button).toHaveAttribute('aria-label', 'Test Label');
    });

    it('should apply custom className', () => {
        const { container } = render(<FSCMoodlet fcsType="F" className="custom-test-class" />);
        const element = container.querySelector('.custom-test-class');
        expect(element).toBeInTheDocument();
    });

    it('should apply disabled attribute when state is not-required', () => {
        render(<FSCMoodlet fcsType="F" initialState="not-required" />);
        const button = screen.getByText('F');
        expect(button.closest('button')).toHaveAttribute('disabled');
    });
});